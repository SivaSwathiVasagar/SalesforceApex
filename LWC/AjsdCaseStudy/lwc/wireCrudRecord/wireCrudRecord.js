import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {getRecord, updateRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

// Update Record 

 export default class WireCrudRecord extends LightningElement {

    formData = {};

    handleInput(event) {
        const { name, value } = event.target;
        this.formData[name] = value;
    }

    updateAccount() {
        console.log('Form Data:', this.formData);

        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.formData.accountId;
        fields[ANNUAL_REVENUE.fieldApiName] = Number(this.formData.annualRevenue);

        const recordInput = { fields };

        updateRecord(recordInput)
            .then(() => {
                console.log('Account updated successfully');
            })
            .catch(error => {
                console.error('Error updating account:', error);
            });
    }
}


// Create Record 1

// export default class WireCrudRecord extends LightningElement {
//     form = {};
//     changeHandler(event) {
//             const {name,value} = event.target;
//             this.form[name] = value;   
//         }

//           // Button Event - When user clicks on Save button
//     handleClick(event) {
//         //c/loginSingleCheckBoxcreateRecord({apiName:'Account', fields:this.form})
//         //or
//         createRecord({apiName:ACCOUNT_OBJECT.objectApiName, fields:this.form})
//         .then(a => {
//             console.log('Account Created', a);
//             this.form = {}
//         })
//         .catch(error => {
//             console.error('Error', error);
//         })
//     }
// }

// Create Record 2

// export default class WireCrudRecord extends LightningElement {
// name;

//   handleInput(event) {
//     this.name = event.target.value;
//   }

//   async handleCreate() {
//     const fields = {};
//     // Map the user input to the fields
//     fields[NAME_FIELD.fieldApiName] = this.name;

//     // Configure your recordInput object with the object and field API names
//     const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

//     try {
//       // Invoke createRecord
//       const account = await createRecord(recordInput);
//     } catch (error) {
//       // Handle error
//     }
//   }
// }