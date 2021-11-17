import React from 'react';
import { useAuth } from '../hooks/useAuth';

const OrganizerDashboard = () => {
	const { user, loading } = useAuth();
	return (
		<React.Fragment>
			<h1>Dashboard</h1>
			{loading ? 'Loading...' : `${JSON.stringify(user)}`}
		</React.Fragment>
	);
};

export default OrganizerDashboard;
