import { MapaAlocacao } from "./MapaAlocacao";

export interface Retorno {
    status: string;
    mensagem: string;
    mapaAlocacao: MapaAlocacao;
}
