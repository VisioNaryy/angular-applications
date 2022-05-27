import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  randomText: string = lorem.sentence();
  enteredText: string = "";
  solved: boolean = false;

  onInput(value: string): void {
    this.enteredText = value;
    if (value === this.randomText) this.solved = true;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) return "pending";

    return randomLetter === enteredLetter ? "correct" : "incorrect";
  }
}
