import Api from './Base';
import { Agenda } from '../../models/Agenda';

const url: string = '`v1/listar/DF5TC89D9XFA923FFD/'


export const getAgenda = async (idUsuario: string): Promise<Agenda | undefined> => {
    try {

        const response = await Api.get(`${url}${idUsuario}`);
        if (response.data) {
            return response.data;
        } else {
            return retorno;
            //throw new Error("Não foram encontrados dados");
        }

    } catch (error) {
        return retorno;
        //throw new Error(error);
    }
}


const retorno: Agenda = {
    "retorno":
    {
        "status": "0",
        "mensagem": "",
        "mapaAlocacao": {
            "nomeMapa": "Mapa Teste", "periodo": [{ "diaFormatado": "9/5/2017", "Data": "2017-06-09T10:02:07-0300", "timeStamp": 2031, "idxDat": 0, "nomeDia": "Segunda", "feriado": false }], "recursos": [{ "codEmpresa": 0, "nomeRecurso": "João Paulo", "codRecurso": 0, "gerente": false, "tarefasData": [{ "dia": { "diaFormatado": "9/5/2017", "Data": "2017-06-09T10:02:07-0300", "timeStamp": 2031, "idxDat": 0, "nomeDia": "Segunda", "feriado": false }, "tarefas": [{ "idTarefa": 412, "codigoEmpresa": 0, "codigoUsuario": 0, "codigoAgendamento": 0, "codigoCliente": 0, "dataHoraInicio": "2017-06-09T10:02:07-0300", "dataHoraFim": "2017-06-09T10:02:07-0300", "codigoTipoAtividade": 0, "numeroLocalAtendimento": 0, "numeroDesenvolvimento": 0, "numeroRat": 0, "numeroOportunidade": 0, "codTipoAgendamento": 0, "codUsuarioGeracao": 0, "consideraDiaUtil": 0, "codUsuarioAlteracao": 0, "nomeDataHora": "Fri Jun 09 10:02:07 BRT 2017", "dataHoraInicioFormatada": "09/06/2017 10:02", "dataHoraFimFormatada": "09/06/2017 10:02", "descricaoTarefa": "Tarefa 412", "data": "2017-06-09T10:02:07-0300", "feriado": false },] },] }]
        }
    }
} 