export class Alert{
    constructor(type:string, title: string, msg:string, timeout:number) {
        this.type = type;
        this.msg = msg;
        this.title = title;
        this.timeout = timeout;
    }
    type:string;
    title:string;
    msg:string;
    timeout:number;
  }