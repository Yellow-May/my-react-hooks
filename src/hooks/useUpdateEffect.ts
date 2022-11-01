import React, { useEffect, useRef } from 'react';

const useUpdateEffect = (cb: (...arg: any) => any, dependencies: any[]) => {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}
		return cb();
	}, dependencies);
};

export default useUpdateEffect;
