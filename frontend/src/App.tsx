import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Test from './pages/test';
import Dashboard from './pages/Dashboard';
import setToken from './utils/setToken';

const App: React.FC = () => {
	useEffect(() => {
		setToken(localStorage.getItem('token'));
	}, []);
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/test" element={<Test />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
};

export default App;
