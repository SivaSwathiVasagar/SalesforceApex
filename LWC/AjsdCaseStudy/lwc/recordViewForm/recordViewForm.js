import { LightningElement } from 'lwc';
import StudentObj from '@salesforce/schema/Student__c';
import NameField from '@salesforce/schema/Student__c.Student_Name__c';
import Year from '@salesforce/schema/Student__c.AcademicYear__c';
import Department from '@salesforce/schema/Student__c.Department__c';
import Advisor from '@salesforce/schema/Student__c.Advisor__c';

export default class RecordViewForm extends LightningElement {
    objectApi = StudentObj;
    //fieldsApi = [NameField, Year, Department, Advisor];
    name = NameField;
    year = Year;
    dept = Department;
    advisor = Advisor;
}