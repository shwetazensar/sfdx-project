import { LightningElement } from 'lwc';

export default class QuickNotesUtility extends LightningElement {
    quickNote = '';
    recordId = '';
    list = [];

    handleNoteChange(event) {
        this.quickNote = event.target.value;
    }

    handleIdChange(event) {
        this.recordId = event.target.value;
    }

    saveNote() {
        if (this.quickNote && this.recordId) {
            const newNote = {
                note: this.quickNote,
                recordId: this.recordId
            };
            this.list = [...this.list, newNote];
            this.quickNote = '';
            this.recordId = '';
        }
    }

    clearNote() {
        this.list = [];
    }
}