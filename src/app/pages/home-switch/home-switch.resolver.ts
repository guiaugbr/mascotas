import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Injectable()
export class HomeSwitchResolver implements Resolve<any> {

  constructor(private firebaseService: FirebaseService) {}

  resolve() {
    //return this.firebaseService.getEmpresas();
    return this.firebaseService.getEmpresasFilterBy('peluqueria');
  }
}
