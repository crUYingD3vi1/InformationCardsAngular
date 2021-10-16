import {Component, Input, OnInit} from '@angular/core';
import {CardInform} from "../app.component";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input()
  InfoMas2!: CardInform

  button = ""

  btnRotate() {
    if(this.button === "active")
      this.button = ""
    else
      this.button = "active"
  }


  constructor() {

  }

  ngOnInit(): void {
    console.log(this.InfoMas2.genre)
    console.log(this.InfoMas2.title)
  }

}
