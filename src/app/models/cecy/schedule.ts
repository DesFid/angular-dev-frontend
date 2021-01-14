import { Catalogue } from 'src/app/models/ignug/catalogue';
import { State } from 'src/app/models/ignug/state';

export class Schedule {
    id?:number;
    start_time:string;
    end_time:string;
    day:Catalogue;
    state:State
    
}