import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password: string = "";
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onButtonClick(): void {
    const numbers: string = "123456789";
    const letters: string = "abcdefghijklmnopqrstuvwxyz";
    const symbols: string = "!@#$%^&*()";

    let validChars: string = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword: string = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string): void {
    const parsedValue = parseInt(value);

    if (parsedValue != null && !isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
