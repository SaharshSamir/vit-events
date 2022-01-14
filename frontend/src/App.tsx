import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ServerTest from './pages/ServerTest';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Test from './pages/test';
import OrganizerDashboard from './pages/OrganizerDashboard';
import setToken from './utils/setToken';
import StudentDashboard from './pages/StudentDashboard';
import OrganzerDetail from './pages/OrganizerDetails';
import EventForm from './components/EventForm';
import AllPost from './pages/AllPosts';
import { useDispatch } from 'react-redux';
import { getAuth, useStudentAuth } from './hooks/useAuth';
import { LOAD_USER } from './Reducers/type';

const App: React.FC = () => {
	const dispatch = useDispatch();
	setToken(localStorage.getItem('token'));
	const { user, loading, error } = useStudentAuth();
	const cookie = document.cookie;
	const isOrgAuth = cookie?.split(' ')[1]?.split('=')[1];
	console.log(isOrgAuth);
	console.log(user?.user);
	if (user?.user) {
		console.log('here');
		setToken(localStorage.getItem('token'));
		dispatch({
			type: LOAD_USER,
			payload: user?.user
		});
	} else if (isOrgAuth) {
		const getData = async () => {
			const {
				user: resUser,
				loading: resLoading,
				error: resError
			} = await getAuth();

			const val = resUser as any;
			const val1 = val.organizerProfile;
			dispatch({
				type: LOAD_USER,
				payload: val1
			});
			localStorage.removeItem('token');
		};

		getData();
	}

	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/servertest" element={<ServerTest />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/test" element={<Test />} />
				<Route path="/addEvent" element={<EventForm />} />
				<Route path="/getEvents" element={<AllPost />} />
				<Route path="/dashboard/organizer" element={<OrganizerDashboard />} />
				<Route path="/organizer/addDetail" element={<OrganzerDetail />} />
				<Route path="/dashboard/student" element={<StudentDashboard />} />
			</Routes>
		</>
	);
};

export default App;
