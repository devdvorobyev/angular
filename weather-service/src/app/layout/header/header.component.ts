import { Component } from '@angular/core';


interface IPage {
  name: string,
  routerLink: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageList!: IPage[];
  constructor(){
    this.pageList = [ { name: 'Домашняя страница', routerLink: '' }, { name:'О приложении', routerLink: 'about' }, { name:'Настройки', routerLink: 'settings' } ]
  }

}
