import { LightningElement, api } from 'lwc';
import Contact from '@salesforce/schema/Contact';
import AccountId from '@salesforce/schema/Contact.AccountId';
import LastName from '@salesforce/schema/Contact.LastName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccountAddress from '@salesforce/apex/AccountApexLwc.getAccountAddress';

export default class ContactAccountLookup extends LightningElement {

    objectApi = Contact;
    accountId = AccountId;
    lastName = LastName;

    selectedAccountId;
    billingAddress = null;
    hasBillingAddress = false;
    accountSelectedButNoAddress = false;

    @api recordId;

    handleSubmit(event) {
        // Fetch Account Id from user input
        const fields = event.detail.fields;
        this.selectedAccountId = fields.AccountId;
        console.log('Selected Account Id:', this.selectedAccountId);

        this.billingAddress = null;
        this.hasBillingAddress = false;
        this.accountSelectedButNoAddress = false;

        if (!this.selectedAccountId) {
            event.preventDefault();
            this.showToast('Error', 'Please select an Account', 'error');
        }
    }
    // Reset
    handleCancel() {
        console.log('Cancel clicked');

        this.selectedAccountId = null;
        this.billingAddress = null;
        this.hasBillingAddress = false;
        this.accountSelectedButNoAddress = false;
    }


    // After Submit
    handleSuccess(event) {
        console.log('Contact saved successfully');
        console.log('Contact Record Id:', event.detail.id);

        this.showToast('Success', 'Contact updated successfully', 'success');

        // Call Apex to get Billing Address
        getAccountAddress({ recId: this.selectedAccountId })
            .then(response => {
                if (response && response.length > 0) {
                    this.billingAddress = response[0];

                    this.hasBillingAddress =
                        this.billingAddress.BillingStreet ||
                        this.billingAddress.BillingCity ||
                        this.billingAddress.BillingState ||
                        this.billingAddress.BillingPostalCode ||
                        this.billingAddress.BillingCountry;

                    this.accountSelectedButNoAddress = !this.hasBillingAddress;

                    console.log('Billing Address:', this.billingAddress);
                    console.log('Billing Address:', this.hasBillingAddress);
                }
                else {
                    this.accountSelectedButNoAddress = true;
                }
            })
            .catch(error => {
                console.error('Error from Apex:', error);
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}
