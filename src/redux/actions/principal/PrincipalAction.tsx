// store/session/actions.ts
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';


export interface NomeAction {
    type: 'NOME',
    nome: string
}

export interface SobrenomeAction {
    type: 'SOBRENOME',
    sobrenome: string
}

export type PrincipalAction = NomeAction | SobrenomeAction;

export const nomeAction = (nome: string): NomeAction => {
    return { type: 'NOME', nome };
}

export const sobrenomeAction = (sobrenome: string): SobrenomeAction => {
    return { type: 'SOBRENOME', sobrenome };
}

export const login = (nome: string, sobrenome: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>):
        Promise<void> => {
        return new Promise<void>((resolve) => {
            dispatch(nomeAction(nome));
            dispatch(sobrenomeAction(sobrenome));
        })
    }
}