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

    window.onscroll = (e) => {
      let element = document.getElementById("nav");
      if (window.pageYOffset > 300) {
        element.classList.add("navbar__scroll-color");
      } else {
        element.classList.remove("navbar__scroll-color");
      }
    }
  }

  scrollTo(id) {
    let x = document.getElementById(id)
    x.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
