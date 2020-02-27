import { Component, OnInit } from "@angular/core";

export enum Example {
  Value = "Title"
}

@Component({
  selector: "lib-example",
  template: `
    <button [title]="'${Example.Value}'">Button</button>
  `,
  styles: []
})
export class ExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
