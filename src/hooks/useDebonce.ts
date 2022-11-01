import React, { useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebonce = (
	cb: (...args: any) => void,
	delay: number,
	dependencies: any[]
) => {
	const { reset, clear } = useTimeout(cb, delay);

	useEffect(reset, [...dependencies, reset]);
	useEffect(clear, []);
};

export default useDebonce;
