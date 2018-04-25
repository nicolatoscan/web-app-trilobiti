import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasourceService {

  constructor(public http: HttpClient) { }

  private url = 'http://nicolatoscan.altervista.org/ard.php?';

  updateData(par: string): Observable<string[]> {
    return this.http.get(this.url.concat(par)).map(data => (<string>data).split(';'));
  }

}
