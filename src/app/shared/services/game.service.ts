import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../models/response.model';
import { ApiUrlsConfig } from './api-url-config.service';

@Injectable({ providedIn: 'root' })
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getPublicStashTabs(id?: string): Observable<ResponseModel> {
    const id2 = 'b9799e92-0a0a-456f-b427-f4c67ed114f3';
    const url: string = ApiUrlsConfig.publicStashTabs(id ? id : id2);
    return this.httpClient.get<ResponseModel>(url).pipe(
      map((res) => res[0]));
  }
}
