import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountApexLwc.getAccountList';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

// export default class LwcApexPractice extends LightningElement {
//     accountFromApex;
//     accountsRecordId;
//     refreshApexThruWire;
//     display = false;
//     rating = null;

//     // Imperative call 
//     // handleGetRecord(event){
//     //     getAccountList({Rating : 'Hot'})
//     //     .then(response => {
//     //         //console.log('Account Record : ' + JSON.stringify(response));
//     //         this.accountFromApex = response;
//     //     })
//     //     .catch(error => {
//     //         console.log('Error : ' + JSON.stringify(error))
//     //     })
//     // }

//     // To refresh UI we need @wire to call our Apex
//     handleGetRecord() {
//         this.display = true;
//         console.log('Handle Get record Button clicked');
//         this.rating = 'Hot';
         
//         //refreshApex(this.refreshApexThruWire);

//     }

//     @wire(getAccountList, { Rating: '$rating' })
//     getAccountListFromApex(response) {
//         console.log('Apex class Called, Wire loaded');
//         this.refreshApexThruWire = response;
//         if (response.data);
//         this.accountFromApex = response.data;
//         console.log('Account Response : ' + JSON.stringify(this.accountFromApex))
//         if (response.rrror);
//         console.log('Error from @wire :' + JSON.stringify(response.error));
//     }


//     // Imperative call 
//     handleDeleteClick(event) {

//         this.accountsRecordId = event.target.name;
//         console.log('Account Deleted record id : ' + this.accountsRecordId);
//         deleteRecord(this.accountsRecordId)
//             .then(response => {
//                 this.showToast('Success', 'Account Record Deleted: ' + this.accountsRecordId, 'success');
//                 refreshApex(this.refreshApexThruWire);
//             })
//             .catch(error => {
//                 console.log('Error: ' + JSON.stringify(error));
//                 this.showToast('Error', 'LWC : Failed to Delete record: ' + error.body.message, 'error');
//                 //this.showToast('Error', 'LWC : Failed to Delete record: ', 'error');
//             })
//     }

//     showToast(title, message, variant) {
//         this.dispatchEvent(
//             new ShowToastEvent({
//                 title,
//                 message,
//                 variant,
//                 mode: 'dismissable'
//             })
//         );
//     }
// }


export default class LwcApexPractice extends LightningElement {
    accountFromApex;
    accountsRecordId;
    refreshApexThruWire;
    display = false;
    rating = null;

    columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue' },
    { label: 'Rating', fieldName: 'Rating' },
    {
        label: 'Delete',
        type: 'button',
        initialWidth: 100,
        typeAttributes: {
            label: 'Delete',
            name: 'delete',    
            variant: 'destructive'
        }
    }
];


    // Imperative call 
    // handleGetRecord(event){
    //     getAccountList({Rating : 'Hot'})
    //     .then(response => {
    //         //console.log('Account Record : ' + JSON.stringify(response));
    //         this.accountFromApex = response;
    //     })
    //     .catch(error => {
    //         console.log('Error : ' + JSON.stringify(error))
    //     })
    // }

    // To refresh UI we need @wire to call our Apex
    handleGetRecord() {
        this.display = true;
        console.log('Handle Get record Button clicked');
        this.rating = 'Hot';
         
        //refreshApex(this.refreshApexThruWire);

    }

    @wire(getAccountList, { Rating: '$rating' })
    getAccountListFromApex(response) {
        console.log('Apex class Called, Wire loaded');
        this.refreshApexThruWire = response;
        if (response.data);
        this.accountFromApex = response.data;
        console.log('Account Response : ' + JSON.stringify(this.accountFromApex))
        if (response.rrror);
        console.log('Error from @wire :' + JSON.stringify(response.error));
    }


    // Imperative call 
    // handleDeleteClick(event) {

    //     this.accountsRecordId = event.target.name;
    //     console.log('Account Deleted record id : ' + this.accountsRecordId);
    //     deleteRecord(this.accountsRecordId)
    //         .then(response => {
    //             this.showToast('Success', 'Account Record Deleted: ' + this.accountsRecordId, 'success');
    //             refreshApex(this.refreshApexThruWire);
    //         })
    //         .catch(error => {
    //             console.log('Error: ' + JSON.stringify(error));
    //             this.showToast('Error', 'LWC : Failed to Delete record: ' + error.body.message, 'error');
    //             //this.showToast('Error', 'LWC : Failed to Delete record: ', 'error');
    //         })
    // }

    // Row action handler for lightning-datatable
handleRowAction(event) {
    console.log('rowaction event:', event.detail);

    // Datatable always sends action + row inside event.detail
    const actionName = event.detail.action.name;
    const row = event.detail.row;

    console.log('actionName:', actionName);
    console.log('row:', row);

    // When Delete button is clicked
    if (actionName === 'delete') {
        // row.Id is the Account record Id
        this.deleteAccount(row.Id);
    }
}

// Reusable delete method
deleteAccount(recordId) {
    console.log('Account Deleted record id : ' + recordId);

    deleteRecord(recordId)
        .then(() => {
            this.showToast('Success', 'Account deleted successfully', 'success');

            // Refresh only the datatable data
            refreshApex(this.refreshApexThruWire);
        })
        .catch(error => {
            console.log('Error deleting record : ' + JSON.stringify(error));
            this.showToast(
                'Error',
                error.body?.message || 'Error while deleting record',
                'error'
            );
        });
}

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant,
                mode: 'dismissable'
            })
        );
    }
}