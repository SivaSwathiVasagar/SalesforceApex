import { LightningElement } from 'lwc';

export default class DoItYourself extends LightningElement {

    // Checkbox values
    selected = [];

    options = [
        { label: 'Existing Member Login', value: 'login' },
        { label: 'New Member Login', value: 'register' }
    ];

    // Login fields
    username = '';
    password = '';
    showInvalidPassword = false;

    // Register fields
    name = '';
    email = '';
    missingFields = false;

    // Only 1 checkbox should be selected
    handleCheckChange(event) {
        const allSelectedValues = event.detail.value; 
        const lastSelected = allSelectedValues[allSelectedValues.length - 1]; 
        this.selected = [lastSelected]; 
        console.log('Selected =', JSON.stringify(this.selected));
    }

    // handleCheckChange(event) {
    //     const clickedValue = event.detail.value;
    //     this.selected = [clickedValue];
    //     console.log('Selected =', JSON.stringify(this.selected));
    // }

    // Getter methods to display based on Value selected
    get showLogin() {
        return this.selected[0] === 'login';
    }

    get showRegister() {
        return this.selected[0] === 'register';
    }

    // Input handlers
    handleUsername(event) {
        this.username = event.target.value;
    }

    handlePassword(event) {
        this.password = event.target.value;
    }

    handleName(event) {
        this.name = event.target.value;
    }

    handleEmail(event) {
        this.email = event.target.value;
    }

    // Login Logic
    handleLogin() {
        if (this.password !== '1234') {
            this.showInvalidPassword = true;
        } else {
            this.showInvalidPassword = false;
            alert('Welcome ' + this.username);
        }
    }

    // Registration Logic
    handleRegister() {
        if (!this.name || !this.email) {
            this.missingFields = true;
        } else {
            this.missingFields = false;
            alert('Registration Successful! Welcome ' + this.name);
        }
    }
}