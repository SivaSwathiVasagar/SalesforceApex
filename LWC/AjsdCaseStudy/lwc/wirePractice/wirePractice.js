import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';

export default class WirePractice extends LightningElement {
    accountRecord;
    userId = Id;
    userRecord;
    
    // When you want 2 @wire, use alias name after adaptor

    @wire(getRecord, {
        recordId: '001NS00001O1blbYAB',
        fields: [
            'Account.Name',
            'Account.AnnualRevenue',
            'Account.BillingCity',
            'Account.BillingCountry',
            'Account.BillingStreet',
            'Account.BillingState',
            'Account.BillingPostalCode'
        ]
    })
    account;

    // @wire (getRecord, {recordId :this.userId, layoutTypes: 'Full'})
    // To make it reactive u should use $ sign
    @wire(getRecord, {
        recordId: '$userId',
        fields: ['User.Name']
    })
    user;

    //  @wire (getRecord, {recordId :'001NS00001O1blbYAB', layoutTypes : 'Full'})

    // Intial leavel of learning but you can directly spread response.data
    // getAccountRecord(response){
    //     console.log('Wire Called');
    //     if(response.data){
    //         console.log(response);
    //         this.accountRecord = response.data.fields;
    //     }
    // }

    // Use Spread values from response object and Specify layout as Full

    // ✔ Corrected: using alias wire data properly
    get accountRecordData() {
        if (this.account && this.account.data) {
            console.log('Wire Called');
            console.log('UserID : ' + this.userId);
            console.log(this.account.data.fields);
            return this.account.data.fields;
        }
        return undefined;
    }

    get userRecordData() {
        if (this.user && this.user.data) {
            return this.user.data.fields;
        }
        return undefined;
    }
}
