import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    { title: "Why is the sky blue", content: "Because it is LMAO" },
    {
      title: "Why are shamans bad in pvp except restro",
      content: "Dunno",
    },
    {
      title: "Why are you C# programmer",
      content: "Because C# is great",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.modalOpen = !this.modalOpen;
  }
}
