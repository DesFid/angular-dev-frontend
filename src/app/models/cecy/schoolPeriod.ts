import { State } from 'src/app/models/ignug/state';
export class SchoolPeriod {
    id?:number;
    code:string;
    name:string;
    start_date:Date;
    end_date:Date;
    ordinary_start_date:Date;
    ordinary_end_date:Date;
    extraordinary_start_date:Date;
    extraordinary_end_date:Date;
    especial_start_date:Date;
    especial_end_date:Date;
    state:State;
    
}