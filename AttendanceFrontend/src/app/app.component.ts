import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { UserStorageService } from './basic/login/basic-services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AttendanceFrontend';

  isEmployeeLoggedIn:boolean = UserStorageService.isEmployeeLoggedIn();
  isManagerLoggedIn:boolean = UserStorageService.isManagerLoggedIn();
  isAdminLoggedIn:boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router:Router){
  };

  ngOnInit(){
    this.router.events.subscribe((event)=>{ 
        this.isEmployeeLoggedIn = UserStorageService.isEmployeeLoggedIn();
        this.isManagerLoggedIn = UserStorageService.isManagerLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    });
  }
}
