import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import principal, { PrincipalState } from './PrincipalReducer';
import agenda, { AgendaState } from './AgendaReducer';

export interface RootState {
    principal: PrincipalState,
    agenda: AgendaState
}

export default createStore(combineReducers<RootState>({
    principal,
    agenda
}), {}, applyMiddleware(ReduxThunk));
