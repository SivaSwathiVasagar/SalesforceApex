import { LightningElement } from 'lwc';
import LightningDataTable  from 'lightning/datatable';
import progressRing from './progressRing.html';

export default class DatabaseCustomTablePractise1 extends LightningDataTable {
    static customTypes = {
        progRing : {
            template : progressRing      
    }
}
}