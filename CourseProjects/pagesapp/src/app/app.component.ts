import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: "Dragon!",
      url: "https://images.unsplash.com/photo-1616262373426-18bfa28bafab?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Desert",
      url: "https://images.unsplash.com/photo-1616272963049-da2d8efc0c57?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Hallway",
      url: "https://images.unsplash.com/photo-1616262768633-6fa77ef5edf8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Beautiful forest",
      url: "https://images.unsplash.com/photo-1616259539340-b5ba56749713?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  checkWindowIndex(index: number): boolean {
    return Math.abs(this.currentPage - index) < 5;
  }
}
