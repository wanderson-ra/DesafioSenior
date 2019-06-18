import { Periodo } from "./Periodo";
import { Recurso } from "./Recurso";

export interface MapaAlocacao {
    nomeMapa: string;
    periodo: Periodo[];
    recursos: Recurso[];
}