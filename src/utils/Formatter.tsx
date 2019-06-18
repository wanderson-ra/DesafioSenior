import moment from 'moment';

export const formatarData = (data: string, mascaraData: string, mascaraSaida: string) => {
    return moment(data, mascaraData).format(mascaraSaida);
}

export const formatarChaveData = (data: Date) => {
    return moment(data).format('YYYY-MM-DD');
}