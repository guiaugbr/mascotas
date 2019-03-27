import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-new-empresa',
  templateUrl: './new-empresa.page.html',
  styleUrls: ['./new-empresa.page.scss'],
})
export class NewEmpresaPage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.image = "./assets/imgs/pets.jpg";
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      cif: new FormControl('', Validators.required),
      codPostal: new FormControl('', Validators.required),
      evento: new FormControl(''),
      especialidad: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      plan: new FormControl('', )
    });
  }

  onSubmit(value){
    let data = {
      title: value.title,
      description: value.description,
      direccion: value.direccion,
      telefono: value.telefono,
      cif: value.cif,
      codPostal: value.codPostal,
      evento: value.evento,
      especialidad: value.especialidad,
      email: value.email,
      plan: value.plan,
      image: this.image
    }
    this.firebaseService.createEmpresa(data)
      .then(
        res => {
          this.router.navigate(["/home"]);
        }
      )
  }

  openImagePicker(){
    this.imagePicker.hasReadPermission()
      .then((result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.uploadImageToFirebase(results[i]);
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Image was updated successfully',
      duration: 3000
    });
    this.presentLoading(loading);
    let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image_src, randomId)
      .then(photoURL => {
        this.image = photoURL;
        loading.dismiss();
        toast.present();
      }, err =>{
        console.log(err);
      })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
