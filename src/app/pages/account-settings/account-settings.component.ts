import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsService:SettingsService) {}

  public changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
  
  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }
}
