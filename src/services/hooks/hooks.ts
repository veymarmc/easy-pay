import { ReactNode, useEffect, useContext } from 'react';
import { navbarActionsContext } from '../context';

export const useNavbarContext = () => useContext(navbarActionsContext);

export function useLoadNavbarContext(actions: ReactNode) {
	const { setActions } = useNavbarContext();

	useEffect(() => {
		setActions(actions);

		return () => {
			setActions(undefined);
		};
	}, [actions, setActions]);
}
