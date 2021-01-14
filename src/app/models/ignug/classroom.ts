import {State} from './state';

export class Classroom{
    id?: number;
    code:string;
    name:string;
    icon:string;
    type:State;

    constructor() {
        this.id = 0;
        this.code = '';
        this.name = '';
        this.icon = '';
        this.type = new State();
    }

}
