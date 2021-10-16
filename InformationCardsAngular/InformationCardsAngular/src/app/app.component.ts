import { Component, OnInit } from '@angular/core';

export interface CardInform {
  title: string
  author: string
  genre: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InformationCardsAngular';
  InfoMas: CardInform[] = []

  parseJSON(InfoMas: CardInform[]) {
    var requestURL = 'https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
      var json = request.response;
      var dataJson = json["data"]
      InfoMas.push({author: dataJson[0].author, title: dataJson[0].title, genre: dataJson[0].genre})
      console.log(json["status"])
    }
  }
  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.parseJSON(this.InfoMas)
    }


  }
}
