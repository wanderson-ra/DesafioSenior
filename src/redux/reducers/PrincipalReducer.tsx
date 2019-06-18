import { combineReducers } from 'redux'
import { PrincipalAction } from '../actions/principal/PrincipalAction';

export interface PrincipalReducer {
    nome: string,
    sobrenome: string
}

export interface PrincipalState {
    principalReducer: PrincipalReducer
}


const principalReducer = (state: PrincipalReducer = { nome: '', sobrenome: '' },
    action: PrincipalAction): PrincipalReducer => {

    switch (action.type) {
        case 'NOME':
            return { ...state, nome: action.nome };

        case 'SOBRENOME':
            return { ...state, sobrenome: action.sobrenome }

        default: return state;
    }
}

export default combineReducers<PrincipalState>({
    principalReducer
});