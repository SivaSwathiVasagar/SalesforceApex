import { LightningElement } from 'lwc';

export default class DoItYourself extends LightningElement {
    selected = ''; // single value

    // Login fields
    username = '';
    password = '';
    showInvalidPassword = false;

    // Register fields
    name = '';
    email = '';
    missingFields = false;

    // Single-selection checkbox handler
    handleCheckChange(event) {
        this.selected = event.target.value; 
        console.log( this.selected);
    }

    // Getter methods to display based on Value selected
    get isLoginSelected() {
        return this.selected === 'login';
    }

    get isRegisterSelected() {
        return this.selected === 'register';
    }

    // Getters for showing sections
    get showLogin() {
        return this.selected === 'login';
    }

    get showRegister() {
        return this.selected === 'register';
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

    // Login logic
    handleLogin() {
        if (this.password !== '1234') {
            this.showInvalidPassword = true;
        } else {
            this.showInvalidPassword = false;
            alert('Welcome ' + this.username);
        }
    }

    // Registration logic
    handleRegister() {
        if (!this.name || !this.email) {
            this.missingFields = true;
        } else {
            this.missingFields = false;
            alert('Registration Successful! Welcome ' + this.name);
        }
    }
}