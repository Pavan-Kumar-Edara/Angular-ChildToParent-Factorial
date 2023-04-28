import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-fact',
  templateUrl: './child-fact.component.html',
  styleUrls: ['./child-fact.component.css']
})
export class ChildFactComponent implements OnInit {

  @Output() factResult:EventEmitter<number>=new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }
  calculateFactorial() {
    let number = 5;
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    this.factResult.emit(factorial);
  }
}
