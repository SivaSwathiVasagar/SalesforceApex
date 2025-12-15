import { LightningElement } from 'lwc';
import taj from '@salesforce/resourceUrl/taj';
import temple from '@salesforce/resourceUrl/temple';

export default class ModalParent extends LightningElement {

    showMonuments = false;

    monuments = [
        { id: 1, name: 'Taj Mahal', img: taj, description: 'Symbol of Love' },
        { id: 2, name: 'Meenakshi Temple', img: temple, description: 'Famous Temple' }
    ];

    selectedNames = [];

    handleShow() {
    this.showMonuments = false;
    setTimeout(() => {
        this.showMonuments = true;
    }, 0);
}


    handleSelection(event) {
        this.selectedNames = event.detail;
    }
}


