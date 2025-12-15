import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    age = 20;
    isAdult = true;
    handleAgeChange(event) {
        this.age = event.target.value;
    }

    get isAdult() {
    return this.age >= 18;
}
}