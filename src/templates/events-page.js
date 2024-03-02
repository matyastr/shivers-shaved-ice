import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

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
          <div className="event-hide-table">
            We have no events booked at the moment, but stay tuned!
          </div>
        )}
      </div>
    </>
  );
};

const EventsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <EventsPageTemplate {...post.frontmatter} />
    </Layout>
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
