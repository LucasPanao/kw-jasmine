import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  ngOnInit(): void {
    this.getMoreItems(true);
  }

  joinStrings(str1: string, str2: string): string {
    return str1 + str2
  }

  numStrBool(val: number | string | boolean) {
    return typeof val
  }

  addTwoNumbers(num1: number, num2 = 0): number {
    return num1 + num2
  }

  numToPow(num: number, exp: number): number {
    return num ** exp
  }

  getMoreItems(isShowMore: boolean): boolean {
    if (isShowMore) {
      return true
    } else {
      return false
    }
  }

}
