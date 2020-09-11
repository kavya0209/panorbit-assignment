import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable , Subject } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { IEmployee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  private _url:string ="https://panorbit.in/api/users.json";
  constructor(private http: HttpClient) { }

  getDatat():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }


}
