import { LightningElement,api } from 'lwc';
import Age from '@salesforce/schema/BloodDonor__c.Age__c';
import Name from '@salesforce/schema/BloodDonor__c.Name';
import BloodType from '@salesforce/schema/BloodDonor__c.Blood_Type__c';
import DaysSince from '@salesforce/schema/BloodDonor__c.Days_since_last_donation__c';
import Eligible from '@salesforce/schema/BloodDonor__c.Eligibility_for_Donation__c';
import State from '@salesforce/schema/BloodDonor__c.State__c';

export default class RecordViewFormRecordPage extends LightningElement {
    @api objectApiName; // fetch object and record id from the lightning page
    @api recordId;

    age = Age;
    name = Name;
    bloodType = BloodType;
    daysSince = DaysSince;
    eligible = Eligible;
    state = State;
}