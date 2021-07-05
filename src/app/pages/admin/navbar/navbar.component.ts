import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navData:any;
  navname : any = null;
  navdes : any = null;
  id : any;
  position : any;
  pData:any;
  addOrEdit:boolean=true;
  newData : any;
  search:any='';
  constructor(
    private navService:NavbarService
  ) { }

  ngOnInit(): void {
    this.nav()
  }
  async nav(){
    this.navService.navbar().subscribe(res=>{
      this.navData = res.nav;
      console.log(this.navData)
    })
  }
  async submit(){

    if(this.navname === null || this.navname == 0 ) return alert("Please fill !")
    if(this.navdes === null || this.navdes == 0 ) return alert("Please fill !")
    if(this.position === null || this.position == 0 ) return alert("Please fill !")


    if(this.navData.length>0){
      this.id = this.navData.length
      console.log(this.id)
    }
    var addData = {
      'id':this.id+1,
      'name':this.navname,
      'description':this.navdes,
      'position':this.position 
    }
    this.navData.push(addData)
    this.navname = null;
    this.navdes = null;
    this.id = null;
    this.position = null;
  }
  async edit(id:any){
    this.addOrEdit = false;
    this.pData = this.navData.find((nav:any)=>{
      return nav.id == id;
    })
    this.id = this.pData.id;
    this.navname = this.pData.name;
    this.navdes = this.pData.description;
    this.position = this.pData.position;
    console.log(this.pData)
  }

  editSubmit(){
    this.navData[this.id - 1].name = this.navname;
    this.navData[this.id - 1].description = this.navdes;
    this.navData[this.id - 1].position = this.position;

  }

  async delete(id:any){
    this.addOrEdit = true;
    console.log(id)
    this.navData = this.navData.filter((nav:any)=>{
       return nav.id != id;
    })
    this.navname = null;
    this.navdes = null;
    this.id = null;
    this.position = null;

  }
  async addButton(){
    this.addOrEdit = true;
    this.navname = null;
    this.navdes = null;
    this.id = null;
    this.position = null;

  }

}
