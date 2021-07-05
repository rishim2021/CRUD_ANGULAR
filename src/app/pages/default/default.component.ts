import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  navbarData : any;
  constructor(
    private navbarService : NavbarService
  ) { }

  ngOnInit(): void {
    this.navbar()
  }
  async navbar(){
    this.navbarService.navbar().subscribe(res=>{
      this.navbarData = res.nav;
      console.log(this.navbarData)
    })
  }

}
