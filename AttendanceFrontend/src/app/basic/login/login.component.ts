import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './basic-services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from './basic-services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup; // Declaración de un formulario reactivo

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private message: NzMessageService,
              private router: Router) {}

  ngOnInit() {
    // Inicializa el formulario con validaciones
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]], // Campo de email requerido
      password: [null, [Validators.required]] // Campo de contraseña requerido
    });
  }

  submitForm() {
    // Envía los datos del formulario al servicio de autenticación
    this.authService.loginUser(this.loginForm.value).subscribe(res => {
      UserStorageService.saveUser(res);
      if(UserStorageService.isAdminLoggedIn()){
        this.router.navigateByUrl('/admin/dashboard');
      }else if(UserStorageService.isManagerLoggedIn()){
        this.router.navigateByUrl('/manager/dashboard');
      }else if(UserStorageService.isEmployeeLoggedIn()){
        this.router.navigateByUrl('/employee/dashboard');
      }
     this.message.success('Bienvenido',
       { nzDuration: 3000 });
    }, (error: any) => {
      this.message.error('Credenciales incorrectas', {
        nzDuration: 3000
      });
    });
  }
}
