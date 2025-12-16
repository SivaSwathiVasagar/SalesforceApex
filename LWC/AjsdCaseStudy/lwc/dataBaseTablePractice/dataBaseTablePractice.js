import { LightningElement, api, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactCreateApexLwc.getContact';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';


export default class DataBaseTablePractice extends LightningElement {
    selectedRowsDetail;
    selectedRowsAction;
    inlineSaveValues;
    contactList;
    refreshScreen;
    draftValues = [];

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Phone', fieldName: 'Phone', editable: true },
        { label: 'Account', fieldName: 'AccountId', type: 'text' },
        {
            type: 'action',
            typeAttributes: {
                rowActions: [
                    { label: 'Edit', name: 'edit' },
                    { label: 'Delete', name: 'delete' }
                ]
            }
        }
    ];

    // Call Apex to fetch contact list
    @wire(getContact, {})
    getContactList(response) {
        this.refreshScreen = response;
        if (response.data) {
            //console.log('Apex Response is ::: ' + JSON.stringify(response.data));
            this.contactList = response.data;
        }
        if (response.error) {
            console.log('Apex Error is ::: ' + JSON.stringify(response.error));
        }
    }

    // Get info about rows selected
    handleRowSelection(event) {
        console.log('On Row Selection called');
        this.selectedRowsDetail = event.detail.selectedRows;
        console.log(JSON.stringify(this.selectedRowsDetail));
    }

    // Get info about rows Action selected
    handleRowAction(event) {
        console.log('On Row Action called');
        this.selectedRowsAction = event.detail;
        console.log(JSON.stringify(this.selectedRowsAction));
    }

    // Inline editing for phone field -  Save 
    handleSave(event) {
        console.log('Handle Save Called');
        // this.inlineSaveValues = JSON.stringify(event.detail.draftValues);
        // console.log(this.inlineSaveValues);

        //-------------------Basic Old School to convert Fields

        // Convert datatable draft values into record objects
        const editedRecords = event.detail.draftValues.slice().map((draftValue) => {
            const fields = Object.assign({}, draftValue);
            return { fields };
        });

        // ----------------------------------------------------------
        // 2nd Approach - MAP
        // const recordInputs = draftValues.map(draft => {
        // return {
        //     fields: draft
        // };
        // });

        // 3rd Approach - for each
        // let recordInputs = [];

        // draftValues.forEach(draft => {
        // let recordInput = {
        //     fields: draft
        // };
        // recordInputs.push(recordInput);
        // });
        // ----------------------------------------------------------
        const saveInPromises = editedRecords.map(record =>
            updateRecord(record));

        Promise.all(saveInPromises)
            .then((response) => {
                // console.log('Records updated :: ' + JSON.stringify(response));
                console.log('Records updated');

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'LWC = > Contact updated',
                        variant: 'success'
                    }))

                // Clear all datatable draft values
                this.draftValues = [];

                // Refresh Apex
                console.log('Called Refresh');
                refreshApex(this.refreshScreen);
            })
            .catch(error => {
                console.log('Error is ::: ' + JSON.stringify(error));
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Failed',
                        message: 'LWC => Contact not updated',
                        variant: 'error'
                    }))
            })

    }

}