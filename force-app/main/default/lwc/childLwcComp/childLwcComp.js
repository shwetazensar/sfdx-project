import { LightningElement, api } from 'lwc';

export default class ChildLwcComp extends LightningElement {
    @api message;
}