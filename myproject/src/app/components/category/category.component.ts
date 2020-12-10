import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { Category } from "src/app/models/category.model";
import { Tutorial } from "src/app/models/tutorial.model";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  currentCategory?: Category;

  quizes?: Tutorial[];

  categories?: Category[];

  // categories: Category = {
  //   category: " ",
  // };

  constructor(private categoryservice: TutorialService) {}

  ngOnInit() {
    // this.retriveallcategory();
  }

  // setActiveTutorial(category: Category, index: number): void {
  //   this.currentCategory = category;
  //   this.getCategorybyId(this.currentCategory.id);
  // }

  // getCategorybyId(id: any): void {
  //   this.categoryservice.getQuize(id).subscribe(
  //     (data) => {
  //       this.quizes = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // retriveallcategory(): void {
  //   this.categoryservice.getCategoryName().subscribe(
  //     (data) => {
  //       this.categories = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
