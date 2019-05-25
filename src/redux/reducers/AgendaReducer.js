import {
    LOADING_AGENDA,
    ERRO_AGENDA,
    AGENDAS,
    AGENDA_ATUAL,
    RECURSOS
} from '../actions/agenda/Types';

const INITIAL_STATE = {
    agendas: [],
    erroAgenda: false,
    agendaAtual: null,
    loadingAgenda: false,
    recursos: []
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case RECURSOS:
            return { ...state, recursos: action.payload };

        case AGENDA_ATUAL:
            return { ...state, agendaAtual: action.payload };

        case LOADING_AGENDA:
            return { ...state, loadingAgenda: action.payload };

        case ERRO_AGENDA:
            return { ...state, erroAgenda: action.payload };

        case AGENDAS:
            return { ...state, agendas: action.payload };

        default:
            return state;
    }
};
