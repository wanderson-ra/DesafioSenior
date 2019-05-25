import {
    LOADING_AGENDA,
    ERRO_AGENDA,
    AGENDA
} from '../actions/agenda/Types';

const INITIAL_STATE = {
    agenda: [],
    erroAgenda: false,
    loadingAgenda: false,

};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOADING_AGENDA:
            return { ...state, loadingAgenda: action.payload };

        case ERRO_AGENDA:
            return { ...state, erroAgenda: action.payload };

        case AGENDA:
                console.log(action.payload);
            return { ...state, agenda: action.payload };

        default:
            return state;
    }
};
