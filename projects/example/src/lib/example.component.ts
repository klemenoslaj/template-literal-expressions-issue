import { Component, OnInit } from "@angular/core";

enum Example {
  Value
}

@Component({
  selector: "lib-example",
  template: `
    ${Example.Value}
  `,
  styles: []
})
export class ExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
