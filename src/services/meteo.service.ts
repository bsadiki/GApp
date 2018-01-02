import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class MeteoService{
  public host="http://api.openweathermap.org/data/2.5/forecast";
  public key="f7d51796e8339a57d279ce1b742a1801";
  constructor(private http:Http){
  }
  chercher(city:string){
    return this.http.get(this.host+"?q="+city+"&APPID="+this.key)
      .map(rep=>rep.json());
  }
}
