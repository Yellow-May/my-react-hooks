import React, { useCallback, useEffect, useRef } from 'react';

const useTimeout = (cb: () => void, delay: number) => {
	const cbRef = useRef(cb);
	const timeoutRef = useRef<number>();

	useEffect(() => {
		cbRef.current = cb;
	}, [cb]);

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(() => cbRef.current(), delay);
	}, [delay]);

	const clear = useCallback(() => {
		timeoutRef.current && clearTimeout(timeoutRef.current);
	}, []);

	useEffect(() => {
		set();
		return clear;
	}, [delay, set, clear]);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	return { reset, clear };
};

export default useTimeout;
