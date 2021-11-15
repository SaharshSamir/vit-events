import React from 'react';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Test from './pages/test';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
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
