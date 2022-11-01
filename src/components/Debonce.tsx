import { useState } from 'react';
import useDebonce from '../hooks/useDebonce';

const Debonce = () => {
	const [count, setCount] = useState(10);
	useDebonce(() => alert(count), 2000, [count]);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
		</div>
	);
};

export default Debonce;
