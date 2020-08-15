import React from 'react';

import Button from '../components/Button/Button';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader/PageHeader';

const NotFoundPage = () => (
	<Layout>
		<PageHeader
			heading="Page Not Found"
			introduction="You've hit a page that does not exist."
		/>
		<div style={{ padding: '80px 48px', textAlign: 'center' }}>
			<h2 className="font-secondary">
				Can we tempt you with something delicious?
			</h2>
			<br /><br />
			<Button to="/menu" large>
				Check out our menu
			</Button>
		</div>
	</Layout>
)

export default NotFoundPage
