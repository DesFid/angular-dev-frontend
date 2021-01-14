import { State } from 'src/app/models/ignug/state';
import { Catalogue } from 'src/app/models/ignug/catalogue';
import { User } from './user';

export class Participants {
    id?:number;
    user:User;
    person_type:Catalogue;
    state:State;
}