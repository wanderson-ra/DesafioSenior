import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import _ from 'lodash';

import { Agenda } from '../../../models/Agenda';
import { AgendaTypes } from './Types';
import { getAgenda } from '../../../services/api/Agenda';
import { Recurso } from '../../../models/Recurso';

export interface GetAgenda {
    type: AgendaTypes.GET_AGENDA,
    agenda: Agenda
}

export interface LoadingGetAgenda {
    type: AgendaTypes.LOADING_GET_AGENDA,
    loadingGetAgenda: boolean
}

export interface ErroGetAgenda {
    type: AgendaTypes.ERRO_GET_AGENDA,
    erroGetAgenda: boolean
}

export interface AgendaAtual {
    type: AgendaTypes.AGENDA_ATUAL,
    agendaAtual: Recurso
}

export type AgendaAction = GetAgenda | LoadingGetAgenda | ErroGetAgenda | AgendaAtual;

export const dispatchAgenda = (agenda: Agenda): GetAgenda => {
    return { type: AgendaTypes.GET_AGENDA, agenda: agenda };
}

export const dispatchLoadingGetAgenda = (loadingGetAgenda: boolean): LoadingGetAgenda => {
    return { type: AgendaTypes.LOADING_GET_AGENDA, loadingGetAgenda: loadingGetAgenda };
}

export const dispatchErroGetAgenda = (erroGetAgenda: boolean): ErroGetAgenda => {
    return { type: AgendaTypes.ERRO_GET_AGENDA, erroGetAgenda: erroGetAgenda };
}

export const dispatchAgendaAtual = (agendaAtual: Recurso): AgendaAtual => {
    return { type: AgendaTypes.AGENDA_ATUAL, agendaAtual: agendaAtual };
}

export const getAllAgenda = (idUsuario: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>):
        Promise<void> => {
        try {
            dispatch(dispatchErroGetAgenda(false));
            dispatch(dispatchLoadingGetAgenda(true));
            const agenda: Agenda | undefined = await getAgenda(idUsuario);

            console.log(agenda);

            if (agenda) {
                dispatch(dispatchAgenda(agenda));
                dispatch(dispatchAgendaAtual(agenda.retorno.mapaAlocacao.recursos[0]));
            } else {
                dispatch(dispatchErroGetAgenda(true));
            }

        } catch (error) {
            console.log(error);
            dispatch(dispatchErroGetAgenda(true));

        } finally {
            dispatch(dispatchLoadingGetAgenda(false));
        }

    }
}

export const mudarAgendaRecurso = (agenda: Agenda | undefined, idRecurso: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>):
        Promise<void> => {
        if (agenda) {
            const recurso = _.find(agenda.retorno.mapaAlocacao.recursos, item => item.nomeRecurso === idRecurso);

            if (recurso) {
                dispatch(dispatchAgendaAtual(recurso));

            } else {
                dispatch(dispatchErroGetAgenda(true));
            }
        }
    }
}




