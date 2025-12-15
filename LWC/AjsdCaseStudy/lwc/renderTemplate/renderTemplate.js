import { LightningElement } from 'lwc';
import temp1 from "./temp1.html";      
import temp2 from "./temp2.html";  
import main from "./renderTemplate.html";    

export default class RenderTemplate extends LightningElement {
    chosenTemplate;
    main;

    render(){
        return this.chosenTemplate === "Temp 1"? temp1: this.chosenTemplate === "Temp 2"? temp2: main;
    }
    handleClick(event){
        this.chosenTemplate = event.target.label;
        console.log(this.chosenTemplate);
    }
}