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
  headers,
  events,
}) => {
  console.log(!showTable);
  return (
    <>
      <PageHeader heading={heading} />
      <div className="container">
        <div className="about-introduction">{introduction}</div>

        {showTable && (
          <div className="about-grid">
            {Array.isArray(headers) &&
              headers.map((header, index) => {
                return (
                  <span className="about-header" key={index + header.column}>
                    <strong>{header.column}</strong>
                  </span>
                );
              })}
            {Array.isArray(events) &&
              events.map((event, index) => {
                return (
                  <React.Fragment key={index}>
                    <span className="about-span">{event.name}</span>
                    <span className="about-span">{event.date}</span>
                    <span className="about-span">{event.location}</span>
                  </React.Fragment>
                );
              })}
          </div>
        )}
        {!showTable && (
          <div className="about-hide-table">
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
        headers {
          column
        }
        events {
          name
          date
          location
        }
      }
    }
  }
`;
