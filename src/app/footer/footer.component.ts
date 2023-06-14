import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faChevronDown,faChevronRight} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
 
  constructor() { }

  ngOnInit(): void { }
}

