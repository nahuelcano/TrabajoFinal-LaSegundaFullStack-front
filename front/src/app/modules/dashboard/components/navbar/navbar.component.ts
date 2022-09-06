import { Component, OnInit } from '@angular/core';
// import { AuthGuard } from '@gdp/shared/guards';
// import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'gdp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  constructor(  ) { }

  ngOnInit(): void {
  }
  // ver como poner si no se inicio sesion que no aparezca el boton de usuario
}
