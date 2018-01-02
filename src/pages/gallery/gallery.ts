import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {GalleryServices} from "../../services/gallery.services";
import {DetailImagePage} from "../detail-image/detail-image";
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle:string="";
  size=10;
  page:number=1;
  images:any={hits:[]};
  totalPage:number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public galleryService:GalleryServices,
              private loadingController:LoadingController) {
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad GalleryPage');
  }
  onSearch(){
    this.doSearch();
  }
  doSearch(){
    let loading = this.loadingController.create({
      content:"Chargement ..."
    });
    loading.present();
    this.images.hits=[];
    this.galleryService.chercher(this.motCle,this.size,this.page)
      .subscribe(data=>{
        data.hits.forEach(h=>{
          this.images.hits.push(h);
        });
        this.totalPage=data.totalHits/this.size;
        if(data.totalHits%this.size!=0) this.totalPage++;
        loading.dismiss();
      } ,err=>{
        console.log(err);
        loading.dismiss();
      })
  }
  doInfinite(infinite){
    if(this.page<this.totalPage)
    ++this.page;
    this.doSearch();
    infinite.complete();
  }
  onDetailImage(image){
    this.navCtrl.push(DetailImagePage,{myImage:image});
  }
}
