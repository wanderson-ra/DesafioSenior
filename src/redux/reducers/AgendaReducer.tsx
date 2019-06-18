import { combineReducers } from 'redux'
import { AgendaAction } from '../actions/agenda/AgendaAction';
import { AgendaTypes } from '../actions/agenda/Types';
import { Agenda } from '../../models/Agenda';
import { Recurso } from '../../models/Recurso';

export interface AgendaReducer {
    loadingGetAgenda: boolean,
    erroGetAgenda: boolean,
    agenda: Agenda | undefined,
    agendaAtual: Recurso | undefined
}

export interface AgendaState {
    agendaReducer: AgendaReducer
}

const agendaReducer = (state: AgendaReducer = {
    loadingGetAgenda: false,
    erroGetAgenda: false,
    agenda: undefined,
    agendaAtual: undefined
},
    action: AgendaAction): AgendaReducer => {
    switch (action.type) {
        case AgendaTypes.GET_AGENDA:
            return { ...state, agenda: action.agenda };

        case AgendaTypes.ERRO_GET_AGENDA:
            return { ...state, erroGetAgenda: action.erroGetAgenda };

        case AgendaTypes.LOADING_GET_AGENDA:
            return { ...state, loadingGetAgenda: action.loadingGetAgenda };

        case AgendaTypes.AGENDA_ATUAL:
            return { ...state, agendaAtual: action.agendaAtual };

        default: return state;
    }
}

export default combineReducers<AgendaState>({
    agendaReducer
});
