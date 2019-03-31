import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { AuthService } from '../app/services/auth.service';
import {Router} from '@angular/router';
import {timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

showSplash = true;

  public appPages = [
    {
      title: 'Iniciar Sesión',
      url: '/login',
      icon: 'paw'
    },
    {
      title: 'Peluquerias',
      url: '/list-users/peluqueria',
      icon: 'paw'
    },
    {
      title: 'Veterinarias',
      url: '/list-users/veterinaria',
      icon: 'paw'
    },
    {
      title: 'Tiendas',
      url: '/list-users/tienda',
      icon: 'paw'
    },
    {
      title: 'Adiestramiento',
      url: '/list-users/adiestramiento',
      icon: 'paw'
    },
    {
      title: 'Residencias',
      url: '/list-users/residencia',
      icon: 'paw'
    },
    {
      title: 'Adoptame',
      url: '/list-users/adopcion',
      icon: 'paw'
    },
    {
      title: 'Campañas',
      url: '/list-users/otros',
      icon: 'paw'
    },
    {
      title: 'Pagina Principal',
      url: '/home-app',
      icon: 'paw'
    }
  ];

  logout() {
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
    });
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth,
    private authService: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/categories']);
        } else {
          this.router.navigate(['/home-app']);
        }
      }, err => {
        this.router.navigate(['/home-app']);
      }, () => {
        this.splashScreen.show();
      });
      this.statusBar.styleDefault();
    });
  }
}
