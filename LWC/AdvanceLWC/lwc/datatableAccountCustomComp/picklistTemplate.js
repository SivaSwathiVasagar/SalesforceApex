import { LightningElement } from 'lwc';

console.log('🚨 JS FILE LOADED');

export default class PicklistTemplate extends LightningElement {

    connectedCallback() {
        console.log('🟢 PicklistTemplate connected');
    }

    handleChange(event) {
        console.log('🟡 Picklist changed', event.detail.value);
    }
}
