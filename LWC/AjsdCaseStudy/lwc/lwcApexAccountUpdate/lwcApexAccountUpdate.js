import { LightningElement,api,wire } from 'lwc';
import updateAccountList from '@salesforce/apex/AccountApexLwc.updateAccountList';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class LwcApexAccountUpdate extends LightningElement {
    @api recordId;
    //recordId = '001NS00001Y3zNpYAJ';
    accountRevenue = '';

    handleChange(event){
        this.accountRevenue = event.target.value;
        console.log('Account Revenue : ' + this.accountRevenue); 
    }
  
    handleUpdateAccount(){
       updateAccountList({recId : this.recordId, revenue : this.accountRevenue})
        .then(response => {
            console.log('Account Revenue Updated for Id:', this.recordId);
            this.showToast('Success', 'Account Revenue Updated: ' + this.recordId, 'success');
            this.accountRevenue = '';

            console.log("Firing event");
            this.dispatchEvent(new CustomEvent('refreshaccountafterdelete', {
                 bubbles: true,
                 composed: true
            }))
        }
        )
        .catch(error => {
            console.log('Error Updating => ' + error.body );
            this.showToast('Error', 'LWC : Failed to update record: ' + error.body.message, 'error');
        })    
    }
     showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant,
                // mode: 'dismissable'
            })
        );
    }

} 