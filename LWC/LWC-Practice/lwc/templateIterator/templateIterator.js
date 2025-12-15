import { LightningElement } from 'lwc';

export default class TemplateIterator extends LightningElement {
    employees = [
        { Id: 1, Name: 'Emp 1', Role: 'Hr'},
        { Id: 2, Name: 'Emp 2', Role: 'Admin'},
        { Id: 3, Name: 'Emp 3', Role: 'Sales'},
        { Id: 4, Name: 'Emp 4',Role: 'Executive'}
    ]
}