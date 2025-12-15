import { LightningElement, wire, api } from 'lwc';
import { getPicklistValues, getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import AccountType from '@salesforce/schema/Account.Type';
import IndustryType from '@salesforce/schema/Account.Industry';

export default class WireGetPicklist extends LightningElement {
    @api recordTypeId;
    @api recordId;
    picklistValues;
    picklistIndustry;
    value = "Banking"

    // Wire - get object info
    @wire(getObjectInfo, { objectApiName: ACCOUNT })
    handleObjectInfo({ data, error }) {
        if (data) {
            console.log('Record Type ID:', data.defaultRecordTypeId);
            this.recordTypeId = data.defaultRecordTypeId;
        }
        if (error) {
            console.error(error);
        }
    }

    // Wire - to get picklist value, we need Record Type & Field name (Account Type)
    @wire(getPicklistValues, {
        recordTypeId: '$recordTypeId',
        fieldApiName: AccountType
    })
    handlePicklist({ data, error }) {
        console.log('Inside getPicklistValues wire');
        if (data) {
            console.log('Picklist AccountType Data:', data);
            this.picklistValues = data.values;
        }
        if (error) {
            console.error('Picklist AccountType Error:', error);
        }
    }

    // Wire - to get picklist value, we need Record Type & Field name (Industry Type)
    @wire(getPicklistValues, {
        recordTypeId: '$recordTypeId',
        fieldApiName: IndustryType
    })
    handleIndustryType({ data, error }) {
        if (data) {
            //console.log('Picklist Industry Data 1:', data.values);
            this.picklistIndustry = data.values.map(industry => {
                return {
                    label: industry.label, // actual values
                    value: industry.value  // api name
                };
            });
            //console.log('Picklist Industry Data 2:', this.picklistIndustry.label);
            //console.log('Picklist Industry Data 2 Stringified:', JSON.stringify(this.picklistIndustry));
        }
        if (error) {
            console.error('Picklist Industry Error:', error);
        }

    }
    // To Show Value in Combo box
    handleChange(event) {
        this.value = event.detail.value;
    }

    // Multi Picklist values
    // Wire - to get picklist value, we need Record Type & Field name (Industry Type)
    @wire(getObjectInfo, { objectApiName: ACCOUNT })
    objectProperty;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT,
        recordTypeId: '$objectProperty.data.defaultRecordTypeId',  // getting recordTypeId from Wire Property
    })
    multiPicklistInfo;
    // Button Event - When user clicks on Save button
    handleClick(event) {
        console.log(this.multiPicklistInfo.data.picklistFieldValues);
    }

    connectedCallback() {
        console.log('LWC Loaded connectedCallback. Record Id:', this.recordId);
    }

    renderedCallback() {
        console.log('LWC Rendered renderedCallback. Record Id:', this.recordId);
    }

}
