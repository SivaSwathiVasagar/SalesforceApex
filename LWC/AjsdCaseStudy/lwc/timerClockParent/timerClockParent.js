import { LightningElement } from 'lwc';

export default class TimerClockParent extends LightningElement {
    showStart = true; 

    handleStart() {
        this.showStart = false;   
        this.refs.child.start();  
    }

    handleStop() {
        this.showStart = true;
        this.refs.child.stop();
    }

    handleReset() {
        this.showStart = true;
        this.refs.child.reset();
    }
}