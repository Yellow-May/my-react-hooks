import useToggle from '../hooks/useToggle';

const Toggle = () => {
	const [on, toggle] = useToggle(false);

	return (
		<div>
			<div>{on ? 'On' : 'Off'}</div>
			<button onClick={() => toggle()}>Toggle</button>
			<button onClick={() => toggle(false)}>Set False</button>
			<button onClick={() => toggle(true)}>Set True</button>
		</div>
	);
};

export default Toggle;
