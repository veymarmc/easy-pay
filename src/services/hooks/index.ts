import { ReactElement, useEffect } from 'react';
import { useAppDispatch, barActions } from './../../store';

export function useSetNavBarActions(nodeActions: ReactElement) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(barActions.changeBarActions(nodeActions));

		return () => {
			dispatch(barActions.reset());
		};
	}, [dispatch, nodeActions]);
}
