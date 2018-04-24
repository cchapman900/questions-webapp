import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pages: number[];

  constructor() { }

  ngOnInit() {
    this.pages = [1, 2, 3, 4, 5];
  }

}
