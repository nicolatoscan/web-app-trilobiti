import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasourceService {

  constructor(public http: HttpClient) { }

  private url = 'http://nicolatoscan.altervista.org/ard.php';

  updateData(par: string): Observable<string[]> {
    console.log(this.url.concat(par));
    return this.http.get(this.url.concat(par)).map(data => {
      return (<string>data['result']).split(';');
    });
  }

}
