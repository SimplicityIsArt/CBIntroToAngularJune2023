export class Message {

    public title: string;
    public text: string;
    public read:boolean = false;

    constructor(title: string, text: string, read: boolean) {
        this.title = title;
        this.text = text;
        this.read = read;
    }

}