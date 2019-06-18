import { TarefasData } from "./TarefasData";

export interface Recurso {
    codEmpresa: number;
    nomeRecurso: string;
    codRecurso: number;
    gerente: boolean;
    tarefasData: TarefasData[];
}