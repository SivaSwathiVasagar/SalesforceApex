import { LightningElement } from 'lwc';

export default class ProgressBar extends LightningElement {
    isStartDisabled = false;
    isResetDisabled = true;
    isStopDisabled = true;

    handleStart(event){
        console.log("Is function?", typeof this.refs.child.startTimer); //undefined
        this.refs.child.start();
        this.isResetDisabled = false;
        this.isStopDisabled = false;
    }
    handleReset(event){
        this.refs.child.reset();
  
    }
    handleStop(event){
        this.refs.child.stop();
    }
}