import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class AccountContactFetcher extends LightningElement {

    @api recordId; // Account Id from record page
    contacts;

    //Check if contacts exist
    get hasContacts() {
        return this.contacts && this.contacts.length > 0;
    }

    //Fetch Contacts related to this Account
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Contacts',   // ALWAYS plural for Child API name
        fields: [
            'Contact.FirstName',
            'Contact.LastName',
            'Contact.Email',
            'Contact.Phone'
        ]
    })
    getContacts({ error, data }) {
        if (data) {
            this.contacts = data.records;
            //console.log('Fetched Contacts:', this.contacts);
            //console.log('Fetched Contacts:', JSON.stringify(this.contacts));
        } else if (error) {
            console.error('Error fetching contacts:', error);
        }
    }

}
