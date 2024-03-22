import { Component, OnInit } from '@angular/core';
import { BubblesortService } from 'algorithm/bubblesort.service';

@Component({
  selector: 'app-bubblesort',
  templateUrl: './bubblesort.component.html',
  styleUrls: ['./bubblesort.component.css']
})
export class BubblesortComponent implements OnInit {
  unsortedArray: number[] = [34, 203, 3, 746, 200, 984, 198, 764, 9];
  sortedArray: number[] = []; //empty array

  constructor(private bubbleSortService: BubblesortService) { }

  ngOnInit(): void {
    this.sortedArray = this.bubbleSortService.bubbleSort([...this.unsortedArray]);
  }
}
