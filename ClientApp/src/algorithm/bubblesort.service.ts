import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BubblesortService {

  constructor() { }

  bubbleSort(arr: number[]): number[] {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr [j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}

/*
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
