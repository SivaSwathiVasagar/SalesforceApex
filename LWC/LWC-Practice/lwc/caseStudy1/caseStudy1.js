import { LightningElement } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/CS1BG';

export default class CaseStudy1 extends LightningElement {
    get backgroundStyle() {
        return `background-image:url(${backgroundUrl});
                background-size:cover;
                background-position:center;
                background-repeat:no-repeat;`;
    }
}
