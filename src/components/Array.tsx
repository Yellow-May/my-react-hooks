import React from 'react';
import useArray from '../hooks/useArray';

const Array = () => {
	const { set, array, push } = useArray([1, 2, 3, 4, 5]);

	return (
		<div>
			<div>{array.join(',')}</div>

			<div>
				<button onClick={() => push(1)}>Add 1</button>
			</div>
		</div>
	);
};

export default Array;
