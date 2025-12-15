import { LightningElement } from 'lwc';

export default class Rendering extends LightningElement {

 user = { name: 'Swathi', age: 25 };

 handleNameChange(event){
     const nameValue = event.target.value;
     this.user = { ...this.user, name: nameValue };  // NEW reference ✅
 }
 handleAgeChange(event){
    const ageValue = event.target.value;
    this.user = { ...this.user, age: ageValue };
 }
}