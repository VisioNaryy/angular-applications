import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.css"],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: "James",
      age: 24,
      job: "Designer",
      employed: true,
    },
    {
      name: "Sam",
      age: 22,
      job: "Programmer",
      employed: true,
    },
    {
      name: "Kate",
      age: 23,
      job: "Engineer",
      employed: false,
    },
  ];

  headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" },
    { key: "employed", label: "Has a job?" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
