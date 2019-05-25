import Api from '../../../services/Api';
import _ from 'lodash';
import {
    LOADING_AGENDA,
    ERRO_AGENDA,
    AGENDAS,
    AGENDA_ATUAL,
    RECURSOS
} from './Types';
import moment from 'moment';


export const getAgenda = (idUsuario) => async dispatch => {
    try {
        dispatch({
            type: ERRO_AGENDA,
            payload: false
        });

        dispatch({
            type: LOADING_AGENDA,
            payload: true,
        });

        const response = await Api.get(`v1/listar/DF5TC89D9XFA923FFD/${idUsuario}`);

        if (response.data) {
            let agendas = [];
            let recursos = [];

            _.forEach(response.data.retorno.mapaAlocacao.recursos, item => {
                let tarefas = {}
                _.forEach(item.tarefasData, tarefa => {
                    let dia = moment(new Date(tarefa.dia.Data)).format('YYYY-MM-DD');
                    tarefas[dia] = tarefa.tarefas;
                });

                recursos.push({
                    label: item.nomeRecurso,
                    value: item.codRecurso
                })

                agendas.push({
                    nomeUsuario: item.nomeRecurso,
                    idRecurso: item.codRecurso,
                    agenda: tarefas
                });
            });

            dispatch({
                type: RECURSOS,
                payload: recursos
            });

            dispatch({
                type: AGENDAS,
                payload: agendas
            });

            dispatch({
                type: AGENDA_ATUAL,
                payload: agendas[0]
            });
        }

        else {
            dispatch({
                type: ERRO_AGENDA,
                payload: true
            });
        }

    } catch (error) {
        dispatch({
            type: ERRO_AGENDA,
            payload: true
        });

    } finally {
        dispatch({
            type: LOADING_AGENDA,
            payload: false,
        });
    }
}

export const mudarAgendaRecurso = (agendas, idRecurso) => dispatch => {

    const recurso = _.find(agendas, item => item.idRecurso === idRecurso);

    if (recurso) {
        dispatch({
            type: AGENDA_ATUAL,
            payload: recurso
        });
    } else {
        dispatch({
            type: ERRO_AGENDA,
            payload: true
        });
    }
}