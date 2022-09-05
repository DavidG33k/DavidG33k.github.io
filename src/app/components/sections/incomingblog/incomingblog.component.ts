import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incomingblog',
  templateUrl: './incomingblog.component.html',
  styleUrls: ['./incomingblog.component.scss']
})
export class IncomingblogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

}
