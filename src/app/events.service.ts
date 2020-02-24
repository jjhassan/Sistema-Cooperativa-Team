import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { UsersData, dashboard, productos, RootObject, CommonResponse } from './interfaces';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class EventsService {


 
  private dashboardurl = 'assets/data/datosgenerales.json';

  private productosurl = 'assets/data/productos.json';

  private urlapiuser = 'http://190.140.48.74/api/login/authenticate';

  private rootObjecturl = 'http://190.140.48.74/api/Customers/GetUserAccounts?Id=12221';

  constructor(private http: HttpClient, private nativeHttp: HTTP,
    private plt: Platform) { }


  public  ValidateUser(username: string, password: string): Observable<CommonResponse>{
  
    return this.http.get<CommonResponse>(this.urlapiuser +`?UserName=${username}&UserPassword=${password}`);

  }

/*   public getUsers(): Observable<UsersData[]>{
    return this.http.get<UsersData[]>(this.usersurl);
  } */

  public getDashBoard(): Observable<dashboard>{
    return this.http.get<dashboard>(this.dashboardurl);
  }
  
  public getProductos(): Observable<productos[]>{
    return this.http.get<productos[]>(this.productosurl);
  }
  
   public getRootObject(): Observable<RootObject>{
    return this.http.get<RootObject>(this.rootObjecturl);
  } 

}