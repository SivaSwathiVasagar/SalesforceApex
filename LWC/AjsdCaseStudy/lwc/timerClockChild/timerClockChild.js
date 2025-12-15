import { LightningElement, api } from 'lwc';

export default class TimerClockChild extends LightningElement {
    time = '00:00:00';
    seconds = 0;
    intervalId;

    @api start() {
    console.log("startTimer");

    this.intervalId = setInterval(() => {
        this.seconds++;
        //console.log(this.seconds);
        const hrs = Math.floor(this.seconds / 3600);
        const mins = Math.floor((this.seconds % 3600) / 60);
        const secs = this.seconds % 60;

        // Convert to string when updating UI
        this.time = 
            `${hrs.toString().padStart(2, '0')}:` +
            `${mins.toString().padStart(2, '0')}:` +
            `${secs.toString().padStart(2, '0')}`;

            //console.log(this.time);
    }, 1000);
}
    @api stop() {
        console.log("stopTimer");
        clearInterval(this.intervalId);
    }
    @api reset(){
        clearInterval(this.intervalId);
        this.seconds = 0;
        this.time = '00:00:00';
    }
}