import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GalleryServices{
  public host:string="https://pixabay.com/api/";
  public key="6923023-f89309b5a946b3f98de55a6ce";
  constructor(private http:Http){
  }
  chercher(query:string,size:number,page:number){
    return this.http.get(this.host+"?key="+this.key+"&q="+query+"&per_page="+size+"&page="+page)
      .map(rep=>rep.json());
  }
}
