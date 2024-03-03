/*import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BubblesortService {
  array = [];
  toDispatch = [];
  sorted = false;
  round = 0;
  dispatchArray = new Subject<any[]>();

  constructor() { }

  bubbleSort(inputArray: number[]) {
    this.array = [...inputArray];
    while (!this.sorted) {
      this.sorted = true;
      for (let i = 0; i < this.array.length - 1 - this.round; i++) {
        this.toDispatch.push([i, i + 1]);
        if (this.array[i] > this.array[i + 1]) {
          this.toDispatch.push([i, i + 1, true]);
          let temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
          this.sorted = false;
          this.toDispatch.push(this.array.slice(0));
          this.toDispatch.push([]);
        }
      }
      this.toDispatch.push([true, this.array.length - 1 - this.round]);
      this.round++;
    }

    this.handleDispatch();
    return this.array;
  }

  handleDispatch() {
    if (!this.toDispatch.length) {
      setTimeout(() => {
        this.dispatchArray.next(this.array.map((num, index) => index));
      }, 900);
      return;
    }
    this.dispatchArray.next(this.toDispatch.shift());
    setTimeout(() => {
      this.handleDispatch();
    }, 50); // speed is set to 50ms for demonstration
  }
}

/* BELOW IS THE COPY OVER LISTED, THIS NEEDS INTEGRATED INTO THE CREATED SERVICE.

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {
  array = [];
  toDispatch = [];
  sorted = false;
  round = 0;
  dispatchArray = new Subject<any[]>();

  constructor() { }

  bubbleSort(inputArray: number[]) {
    this.array = [...inputArray];
    while (!this.sorted) {
      this.sorted = true;
      for (let i = 0; i < this.array.length - 1 - this.round; i++) {
        this.toDispatch.push([i, i + 1]);
        if (this.array[i] > this.array[i + 1]) {
          this.toDispatch.push([i, i + 1, true]);
          let temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
          this.sorted = false;
          this.toDispatch.push(this.array.slice(0));
          this.toDispatch.push([]);
        }
      }
      this.toDispatch.push([true, this.array.length - 1 - this.round]);
      this.round++;
    }
    this.handleDispatch();
    return this.array;
  }

  handleDispatch() {
    if (!this.toDispatch.length) {
      setTimeout(() => {
        this.dispatchArray.next(this.array.map((num, index) => index));
      }, 900);
      return;
    }
    this.dispatchArray.next(this.toDispatch.shift());
    setTimeout(() => {
      this.handleDispatch();
    }, 50); // speed is set to 50ms for demonstration
  }
}


BELOW IS THE USE WITHIN A COMPONENT
import { BubbleSortService } from './bubble-sort.service';

// ...

constructor(private bubbleSortService: BubbleSortService) { }

ngOnInit() {
  this.bubbleSortService.dispatchArray.subscribe(array => {
    console.log(array);
  });

  this.bubbleSortService.bubbleSort([5, 3, 8, 4, 2]);
}

ngOnDestroy() {
  this.bubbleSortService.dispatchArray.unsubscribe();
}

*/
