import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => {
	const data = entry.getIn(['data']).toJS();

	return (
		<AboutPageTemplate
			title={data.title}
			introduction={data.introduction}
			sections={data.sections}
		/>
	);
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
