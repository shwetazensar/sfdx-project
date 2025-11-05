import { LightningElement } from 'lwc';

export default class SimpleLwcCalculator extends LightningElement {
    firstNumber;
    secondNumber;
    resultValue;

    handleOneChange(evt){
        this.firstNumber = parseInt(evt.target.value);
    }

    handleTwoChange(evt){
        this.secondNumber = parseInt(evt.target.value);
    }

    add(){
        this.resultValue = this.firstNumber + this.secondNumber;
    }   

    subtract(){
        this.resultValue = this.firstNumber - this.secondNumber;
    }

    multiply(){
        this.resultValue = this.firstNumber * this.secondNumber;
    }

    divide(){
        this.resultValue = this.firstNumber / this.secondNumber;
    }
    
}