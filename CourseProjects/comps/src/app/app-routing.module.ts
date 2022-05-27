import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

//NOTE: defining a path for an each module is an implementation of a lazy loading (and we also should delete all references to that modules (and component inside them) in app.module.ts file in imports property)

const routes: Routes = [
  {
    path: "elements",
    loadChildren: () =>
      import("./elements/elements.module").then((x) => x.ElementsModule),
  },
  {
    path: "collections",
    loadChildren: () =>
      import("./collections/collections.module").then(
        (x) => x.CollectionsModule
      ),
  },
  {
    path: "views",
    loadChildren: () =>
      import("./views/views.module").then((x) => x.ViewsModule),
  },
  {
    path: "mods",
    loadChildren: () => import("./mods/mods.module").then((x) => x.ModsModule),
  },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
