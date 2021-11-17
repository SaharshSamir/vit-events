import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Test from './pages/test';
import OrganizerDashboard from './pages/OrganizerDashboard';
import setToken from './utils/setToken';
import StudentDashboard from './pages/StudentDashboard';
import axios from 'axios';

const App: React.FC = () => {
	useEffect(() => {
		setToken(localStorage.getItem('token'), axios);
	}, []);
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/test" element={<Test />} />
				<Route path="/dashboard/organizer" element={<OrganizerDashboard />} />
				<Route path="/dashboard/student" element={<StudentDashboard />} />
			</Routes>
		</>
	);
};

export default App;
