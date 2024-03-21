import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubblesort',
  templateUrl: './bubblesort.component.html',
  styleUrls: ['./bubblesort.component.css']
})
export class BubblesortComponent implements OnInit {

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

}
