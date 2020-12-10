import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Tutorial } from "src/app/models/tutorial.model";

@Component({
  selector: "app-bt",
  templateUrl: "./bt.component.html",
  styleUrls: ["./bt.component.scss"],
})
export class BtComponent implements OnInit {
  currentTutorial: Tutorial = {
    id: " ",
    quizname: "",
    time: " ",
    count: " ",
    category: " ",
  };

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getTutorial(this.route.snapshot.params.categoryid);
  }

  // getTutorial(categoryid: string): void {
  //   this.tutorialService.getbtquize(categoryid).subscribe(
  //     (data) => {
  //       this.currentTutorial = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
