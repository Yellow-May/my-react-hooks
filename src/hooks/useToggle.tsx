import { useState } from 'react';

const useToggle = (defaultValue: boolean) => {
	const [state, setState] = useState(defaultValue);

	const toggleState = (value?: boolean) => {
		setState(prev => value ?? !prev);
	};

	return [state, toggleState] as [boolean, (value?: boolean) => void];
};

export default useToggle;
