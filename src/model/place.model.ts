export class Place{
  title : string;
  country? : string;
  city? : string;
  timeStamp? : number;
  keywords?: string;
  location? : {
    longitude : number,
    latitude : number
  };
  selected? : boolean;
}
