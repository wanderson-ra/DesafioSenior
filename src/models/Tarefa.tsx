export interface Tarefa {
    idTarefa: number;
    codigoEmpresa: number;
    codigoUsuario: number;
    codigoAgendamento: number;
    codigoCliente: number;
    dataHoraInicio: string;
    dataHoraFim: string;
    codigoTipoAtividade: number;
    numeroLocalAtendimento: number;
    numeroDesenvolvimento: number;
    numeroRat: number;
    numeroOportunidade: number;
    codTipoAgendamento: number;
    codUsuarioGeracao: number;
    consideraDiaUtil: number;
    codUsuarioAlteracao: number;
    nomeDataHora: string;
    dataHoraInicioFormatada: string;
    dataHoraFimFormatada: string;
    descricaoTarefa: string;
    data: string;
    feriado: boolean;
}