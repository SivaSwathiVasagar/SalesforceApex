import { LightningElement, api } from 'lwc';

export default class ModalChild extends LightningElement {

    @api monuments = [];
    showMonuments = true;
    selectedSet = new Set();

    handleCheckbox(event) {
        const name = event.target.dataset.name;

        if (event.target.checked) {
            this.selectedSet.add(name);
        } else {
            this.selectedSet.delete(name);
        }

        // Set is NOT directly iterable in template loops, so we convert it to an Array
        this.dispatchEvent(
            new CustomEvent('selectionchange', {
                detail: Array.from(this.selectedSet)
            })
        );
    }

    closeTiles() {
        this.showMonuments = false;
    }
    connectedCallback() {
    this.selectedSet = new Set(this.selected);
}
}
