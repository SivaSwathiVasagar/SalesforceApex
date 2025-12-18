import { LightningElement } from 'lwc';


export default class DatabaseCustomTablePractice extends LightningElement {
    data; columns;
    columns = [
        {label:'Id', fieldName:'Id'},
        {label:'Name', fieldName: 'Name'},
        {label:'Class', fieldName: 'Class'},
        {label:'Marks', fieldName: 'Marks', type:'progRing'}
    ]

    data = [
        {Id: '1', Class: '10th', Name: 'A', Marks : '90'},
        {Id: '2', Class: '11th', Name: 'B', Marks : '40'},
        {Id: '3', Class: '12th', Name: 'C', Marks : '80'},
        {Id: '4', Class: '5th', Name: 'D', Marks : '50'}]
}