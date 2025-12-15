import { LightningElement } from 'lwc';

export default class ParentSlider extends LightningElement {
      val = 50;
      handleChange(event){
        this.val = event.target.value;
          }
}