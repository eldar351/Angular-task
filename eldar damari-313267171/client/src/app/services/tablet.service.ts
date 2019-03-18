import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Tablet } from "../models/Tablet";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TabletService {
  baseUrl: string = "/api/tablets/";
  constructor(private http: HttpClient) {}

  getAllTablets(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteTablet(id: string): Observable<any> {
    ///api/tabltes/123456
    return this.http.delete(this.baseUrl + id, httpOptions);
  }

  addTablet(tablet: Tablet): Observable<any> {
    return this.http.post(this.baseUrl, tablet, httpOptions);
  }

  getTabletById(id:string):Observable<any>
  {
      //http://localhost:3001/api/tablets/5c7d1fbdf78cd21b508a6c37
     return this.http.get(this.baseUrl+id);
  }

  editTablet(tabletData: Tablet, id:string): any {
   //  http://localhost:3001/api/tablets/5c7d1fbdf78cd21b508a6c37
    return  this.http.put(this.baseUrl+id, tabletData, httpOptions);
  }
}
