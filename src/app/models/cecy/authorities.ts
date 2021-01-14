import { Catalogue } from 'src/app/models/ignug/catalogue';
import {State} from '../ignug/state';
import {User} from '../auth/user';

export class Authorities {
    id?: number;
    user?:User;
    status?:State;
    position?: Catalogue;
    start_position:Date;
    end_position:Date;
   
}
