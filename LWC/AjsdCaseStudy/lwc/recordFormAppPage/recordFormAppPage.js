// import { LightningElement } from 'lwc';
// import {ShowToastEvent} from 'lightning/platformShowToastEvent';
// import StudentObj from '@salesforce/schema/Student__c';
// import NameField from '@salesforce/schema/Student__c.Student_Name__c';
// import Year from '@salesforce/schema/Student__c.AcademicYear__c';
// import Department from '@salesforce/schema/Student__c.Department__c';
// import Advisor from '@salesforce/schema/Student__c.Advisor__c';

// export default class RecordFormAppPage extends LightningElement {
//     objectApi = StudentObj;
//     fieldsApi = [NameField, Year, Department, Advisor];

//     handleSuccess(event)
//     {   console.log(event.detail);
//         const toastMsg = new ShowToastEvent({
//             title: 'Success',
//             message: 'Record Submitted id | '+event.detail.id,
//             mode: 'dismissable',
//             variant: 'success'
//         }) 
//         this.dispatchEvent(toastMsg);
//     }
// }

import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class RecordFormAppPage extends LightningElement {
    //@api objectApiName; // fetch object and record id from the lightning page
    //@api recordId;

   showToast(title, message, variant) {
    const toastMsg = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant,
    });
    this.dispatchEvent(toastMsg);
}

handleFormResponse(event) {
    let title, message, variant;

    if (event.type === 'success') {
        title = 'Success';
        const name = event.detail.fields?.Name?.value ?? event.detail.id;
        message = 'Record Created Successfully: ' + name;
        variant = 'success';
    } 
    else if (event.type === 'error') {
        title = 'Error';
        message = ' -- LWC <-> Toast -- ' + event.detail.message || 'Something went wrong!';
        variant = 'error';
    }

    this.showToast(title, message, variant);
}
}