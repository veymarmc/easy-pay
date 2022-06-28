import { ReactNode } from 'react';

export interface INavbarContext {
	actions: ReactNode;
	setActions: (n: ReactNode) => void;
}
