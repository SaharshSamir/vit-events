import React from 'react';
import API from '../utils/Api';

const ServerTest: React.FC = () => {
	let res: any;

	const handleClick = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		try {
			res = await API.get('/auth/test');
			// res = await axios.get('http://localhost:3000/auth/test');
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<React.Fragment>
			<button onClick={(e) => handleClick(e)}>Click Me</button>
			{res ? <p>{JSON.stringify(res.data)}</p> : <p>Loading...</p>}
		</React.Fragment>
	);
};

export default ServerTest;
