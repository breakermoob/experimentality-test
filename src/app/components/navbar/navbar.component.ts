import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() navbar: String;

  constructor() { }

  ngOnInit() {

    window.onscroll = function (e) {
      let element = document.getElementById("nav");
      console.log(window.pageYOffset)
      if (window.pageYOffset>300) {
        element.classList.add("navbar__scroll-color");
      } else {
        element.classList.remove("navbar__scroll-color");
      }
    }
  }

}
