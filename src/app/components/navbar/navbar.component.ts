import { Component, OnInit } from '@angular/core';
import { LOGO_SRC } from 'src/app/shared/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active = 'contacts';
  logoSrc  = LOGO_SRC;

  constructor() { }

  ngOnInit(): void {
  }

}
