import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-triplicate',
  templateUrl: './triplicate.component.html',
  styleUrls: ['./triplicate.component.css']
})
export class TriplicateComponent {

  triplicateLabel = '';
  triplicateArr: number[] = [];
  triplicateResultArr: number[] = [];
  validString = true;

  onSubmit(inpString: string): void {
    this.validString = true;
    this.triplicateArr = inpString.split(",").map(Number);

    for (let i=0; i < this.triplicateArr.length; i++) {
      if (Number.isNaN(this.triplicateArr[i]) ) {
        this.validString = false;
      }
    }

    if (this.validString) {
      this.triplicateArr = this.triplicateArr.sort((a, b) => a - b);
      this.triplicateResultArr = [];
      let currentNumber = NaN;
      let currentRepeat = 1;
      for (let i=0; i < this.triplicateArr.length; i++) {
        if (currentNumber === this.triplicateArr[i]) {
          currentRepeat++;
        }
        else {
          if (currentRepeat >= 3) {
            this.triplicateResultArr.push(currentNumber);
          }
          currentNumber = this.triplicateArr[i];
          currentRepeat = 1;
        }

        if (i === (this.triplicateArr.length - 1)) {
          if (currentRepeat >= 3) {
            this.triplicateResultArr.push(currentNumber);
          }
        }
      }
      this.triplicateResultArr = this.triplicateResultArr.sort((a, b) => b - a);
      this.triplicateLabel = '['+this.triplicateResultArr.join(",")+']';
    }
    else {
      this.triplicateLabel = 'Error.';
    }
    console.log(this.triplicateResultArr);
  }

}
