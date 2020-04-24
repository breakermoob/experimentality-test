import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() String: any;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(id) {
    let x = document.getElementById(id)
    x.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
