import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import "./events-page.scss";

const formatDisplayDates = (datesStr) =>
  datesStr
    .split(',')
    .map((d) => {
      const dt = new Date(`${d.trim()}T12:00:00`);
      return `${dt.getMonth() + 1}/${dt.getDate()}/${String(dt.getFullYear()).slice(2)}`;
    })
    .join(', ');

const parseTimeStr = (timeStr, fallbackMeridiem) => {
  const match = timeStr.trim().match(/^(\d+)(?::(\d+))?\s*(am|pm)?$/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2] || '0', 10);
  const meridiem = (match[3] || fallbackMeridiem || '').toLowerCase();
  if (meridiem === 'pm' && hours !== 12) hours += 12;
  if (meridiem === 'am' && hours === 12) hours = 0;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const parseTimes = (timesStr) => {
  if (!timesStr || /tbd/i.test(timesStr)) return { startTime: null, endTime: null };
  const parts = timesStr.split(/\s*-\s*/);
  if (parts.length < 2) return { startTime: null, endTime: null };
  const endStr = parts[parts.length - 1].trim();
  const startStr = parts[0].trim();
  const endMeridiem = (endStr.match(/(am|pm)/i) || [])[1];
  return {
    startTime: parseTimeStr(startStr, endMeridiem),
    endTime: parseTimeStr(endStr, null),
  };
};

export const EventsPageTemplate = ({
  heading,
  introduction,
  showTable,
  events,
}) => {
  return (
    <>
      <PageHeader heading={heading} />
      <div className="container">
        <div className="events-introduction">{introduction}</div>

        {showTable && (
          <div className="events-container">
            {Array.isArray(events) &&
              events.map((event, index) => {
                return (
                  <div className="event-block" key={index}>
                    <div className="event-title">{event.name}</div>
                    <div className="event-text">{event.displayDates || formatDisplayDates(event.dates)}</div>
                    <div className="event-text">{event.times}</div>
                    <div className="event-text">
                      {event.address1}
                      <br />
                      {event.address2}
                      <br />
                      {event.address3}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {!showTable && (
          <div className="events-hide-table">
            We have concluded our 2025 season. Thank you to everyone who made it a memorable year! <br /><br /> Want a tasty treat at your 2026 event? Please contact us today!
          </div>
        )}
      </div>
    </>
  );
};

const EventsPage = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const { events, showTable } = post.frontmatter;

  const eventSchemas =
    showTable && Array.isArray(events)
      ? events.flatMap((event) => {
          const dates = event.dates.split(',').map((d) => d.trim()).filter(Boolean);
          const { startTime, endTime } = parseTimes(event.times);
          return dates.map((isoDate) => ({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: event.name,
            startDate: startTime ? `${isoDate}T${startTime}` : isoDate,
            endDate: endTime ? `${isoDate}T${endTime}` : isoDate,
            image: 'https://www.shiverspgh.com/img/og-image.png',
            description: `Find Shivers Shaved Ice & Dirty Soda at ${event.name}`,
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            location: {
              '@type': 'Place',
              name: event.address1,
              address: [event.address2, event.address3].filter(Boolean).join(', '),
            },
            organizer: {
              '@type': 'Organization',
              name: 'Shivers Shaved Ice & Dirty Soda',
              url: 'https://www.shiverspgh.com',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              description: 'No ticket required',
              url: 'https://www.shiverspgh.com/events/',
              validFrom: isoDate,
            },
            performer: {
              '@type': 'Organization',
              name: 'Shivers Shaved Ice & Dirty Soda',
              url: 'https://www.shiverspgh.com',
            },
          }));
        })
      : [];

  return (
    <>
      {eventSchemas.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(eventSchemas)}
          </script>
        </Helmet>
      )}
      <Layout
        seoTitle="Upcoming Events | Find Shivers Shaved Ice & Dirty Soda Near Pittsburgh"
        seoDescription="See where Shivers Shaved Ice & Dirty Soda will be next — serving Gibsonia, Allison Park, McCandless, Cranberry, Wexford, Sewickley, Ross, Mars, Franklin Park, and more in the Pittsburgh area."
        pathname={location.pathname}
      >
        <EventsPageTemplate {...post.frontmatter} />
      </Layout>
    </>
  );
};

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EventsPage;

export const aboutPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        introduction
        showTable
        events {
          name
          dates
          displayDates
          times
          address1
          address2
          address3
        }
      }
    }
  }
`;
