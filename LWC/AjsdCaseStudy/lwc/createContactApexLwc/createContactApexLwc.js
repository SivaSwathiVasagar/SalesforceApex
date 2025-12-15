import { LightningElement ,api} from 'lwc';
import createContact from '@salesforce/apex/ContactCreateApexLwc.createContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateContactApexLwc extends LightningElement {
    name;
    phone;
    @api recordId;
    createdContactId;

    handleChange(event) {
        const { name, value } = event.target;
        if (name === 'lastName') {
            this.name = value;
        }

        if (name === 'phone') {
            this.phone = value;
        }
    }
    handleClick() {
        createContact({ lastName: this.name, phone: this.phone, accountId: this.recordId })
            .then(response => {
                this.createdContactId = response;
                console.log(this.accountId);
                console.log('Contact Created: ' + this.createdContactId);

                this.showToast('Success', 'Contact Created: ' + this.createdContactId, 'success');
            })
            .catch(error => {
                console.log('Error: ' + JSON.stringify(error));

                this.showToast('Error', 'LWC : Failed to create record: ' + error.body.message, 'error');
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
