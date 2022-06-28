import { createContext } from 'react';
import { INavbarContext } from '../../domain';

const actionsContextInitValue = { actions: '', setActions: () => {} };
export const navbarActionsContext = createContext<INavbarContext>(actionsContextInitValue);
