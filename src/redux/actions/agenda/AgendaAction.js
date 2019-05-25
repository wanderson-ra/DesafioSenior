import Api from '../../../services/Api';

import {
    LOADING_AGENDA,
    ERRO_AGENDA,
    AGENDA
} from './Types';


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
        
        const agenda  = await Api.get(`v1/listar/DF5TC89D9XFA923FFD/${idUsuario}`);      
    

        if(agenda.data) {            
            dispatch({
                type: AGENDA,
                payload: agenda.data
            });
        }
        else {
            dispatch({
                type: ERRO_AGENDA,
                payload: true
            });
        }
        
    } catch (error) {
        console.log(error)
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