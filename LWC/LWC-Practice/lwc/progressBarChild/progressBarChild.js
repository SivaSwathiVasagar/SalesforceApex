import { LightningElement, api } from 'lwc';

export default class ProgressBarChild extends LightningElement {
progressLine = 0;
IntervalId;
@api start()
{
    this.IntervalId = setInterval(() =>{
        this.progressLine += 10;
    },1000)
    console.log("started");
}

@api reset(){
    clearInterval(this.IntervalId);
    this.progressLine = 0;
    console.log("reset worked");
}

@api stop(){
    clearInterval(this.IntervalId);
    console.log("stoped");
}
}