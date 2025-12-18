import { LightningElement } from 'lwc';
import LightningDataTable  from 'lightning/datatable';
import picklistTemplate from './picklistTemplate.html';



export default class DatatableAccountCustomComp extends LightningDataTable {
static customTypes = {
        picklist: {
            template: picklistTemplate,
            standardCellLayout: true,
            typeAttributes: ['options', 'value', 'context']
        }
    }
    constructor() {
        super();
        console.log('✅ CustomDatatable constructor called');
    }
}