import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { SiderbarService } from '../../services/siderbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
    menuItems:any[];
  constructor(private siderbarService:SiderbarService) { 
    this.menuItems = siderbarService.menu;
    console.log(this.menuItems);
  }

  ngOnInit(): void {
  }

}
