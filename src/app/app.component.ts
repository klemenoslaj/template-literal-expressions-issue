import { Component } from "@angular/core";

export enum ButtonType {
  Button,
  ButtonMenu,
  MenuItem,
  MenuItemMenu
}

@Component({
  selector: "app-root",
  template: `
    <lib-example></lib-example>
  `,
  styles: []
})
export class AppComponent {
  title = "template-literal-expressions-issue";
}
