import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _httpCliet: HttpClient) { }

  getChats(name:string){

    return this._httpCliet.get("https://logicminds-server.onrender.com/"+name)
  }
}
