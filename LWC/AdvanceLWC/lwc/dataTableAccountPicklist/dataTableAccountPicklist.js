import { LightningElement, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import getAccountPickList from '@salesforce/apex/AccountPicklist.getAccountPickList';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class DataTableAccountPicklist extends LightningElement {
 accounts = [];
    ratingOptions = [];

    get isReady() {
    return this.ratingOptions.length > 0 && this.accounts.length > 0;
}

    // 1️⃣ Fetch Account data
    @wire(getAccountPickList)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = JSON.parse(JSON.stringify(data));
        }
    }

    // 2️⃣ Get Account object info
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    // 3️⃣ Get Rating picklist values
    @wire(getPicklistValues, {
        recordTypeId: '$accountInfo.data.defaultRecordTypeId',
        fieldApiName: RATING_FIELD
    })
    ratingPicklist({ data }) {
        if (data) {
            this.ratingOptions = data.values;
        }
    }

    // 4️⃣ Handle picklist change
    handleRatingChange(event) {
        const { recordId, value } = event.detail;

        const fields = {
            Id: recordId,
            Rating: value
        };

        updateRecord({ fields })
            .then(() => {
                // Update UI value
                this.accounts = this.accounts.map(acc =>
                    acc.Id === recordId ? { ...acc, Rating: value } : acc
                );
            });
    }

    // 5️⃣ Columns (getter so picklist loads correctly)
    get columns() {
         console.log('📊 ratingOptions:', JSON.stringify(this.ratingOptions));
    return [
        { label: 'Name', fieldName: 'Name' },
        {
            label: 'Rating',
            fieldName: 'Rating',
            type: 'picklist',
            typeAttributes: {
                options: this.ratingOptions,
                value: { fieldName: 'Rating' },
                context: { fieldName: 'Id' }
            }
        }
    ];
}

}