import React from 'react';
import { useStudentAuth } from '../hooks/useAuth';

const StudentDashboard: React.FC = () => {
	const { user, loading, error } = useStudentAuth();
	console.log(user);
	return (
		<React.Fragment>
			<h1>Student Dashboard</h1>
			<p>{loading ? 'Loading...' : JSON.stringify(user)}</p>
			<p>{error ? JSON.stringify(error) : ' '}</p>
		</React.Fragment>
	);
};

export default StudentDashboard;
