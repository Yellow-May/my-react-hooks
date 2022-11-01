import { useState } from 'react';
import useTimeout from '../hooks/useTimeout';

const Timeout = () => {
	const [count, setCount] = useState(10);
	const { reset, clear } = useTimeout(() => setCount(0), 1000);

	return (
		<div>
			<span>{count}</span>

			<div>
				<button onClick={() => setCount(c => c + 1)}>Increment</button>
				<button onClick={clear}>Clear Timeout</button>
				<button onClick={reset}>Reset Timeout</button>
			</div>
		</div>
	);
};

export default Timeout;
