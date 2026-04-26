import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader/PageHeader";
import "./events-page.scss";

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
                    <div className="event-text">{event.dates}</div>
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
      ? events.map((event) => ({
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: event.name,
          startDate: event.dates,
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
        }))
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
          times
          address1
          address2
          address3
        }
      }
    }
  }
`;
