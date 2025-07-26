import { Injectable } from '@angular/core';

const USER= "auth-user";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  static saveUser(user: any){
    window.localStorage.removeItem(USER); //eliminamos el usuario si existe
    window.localStorage.setItem(USER, JSON.stringify(user)); //guardamos el usuario en el sessionStorage
  }

  static getUser():any{ //obtenemos el usuario del localStorage
    return JSON.parse(localStorage.getItem(USER));
  }

  

  static getUserId():string{ //obtenemos el id del usuario
    const user = this.getUser();
    if(user==null){
      return'';
    }
    return user.id;
  }

  static getUserProjectId():string{ //obtenemos el id del proyecto del usuario
    const user = this.getUser();
    if(user==null){
      return'';
    }
    return user.projectId;
  }

  static getUserRole():string{ //obtenemos el rol del usuario
    const user = this.getUser();
    if(user==null){
      return'';
    }
    return user.userRole;
  }

  static isAdminLoggedIn():boolean{ //verificamos si el usuario es admin
     if(this.getUserRole()=='ADMIN'){
      return true;
     }
     return false;
  }

  static isEmployeeLoggedIn():boolean{ //verificamos si el usuario es empleado
    if(this.getUserRole()=='EMPLOYEE'){
      return true;
    }
    return false;
  }

  static isManagerLoggedIn():boolean{ //verificamos si el usuario es manager
    if(this.getUserRole()=='MANAGER'){
      return true;
    }
    return false;
  }

  static signOut():void{ //cerramos la sesión
    window.localStorage.removeItem(USER);
  }


}
