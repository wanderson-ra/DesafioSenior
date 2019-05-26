import moment from 'moment';

export const formatarData = (data, mascaraData, mascaraSaida) => {
    return moment(data, mascaraData).format(mascaraSaida);
}

export const formatarChaveData = (data) => {
   return moment(new Date(data)).format('YYYY-MM-DD');
}