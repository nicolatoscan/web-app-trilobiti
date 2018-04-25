import { Component, OnInit } from '@angular/core';
import { DatasourceService } from './datasource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  public currentTemp = 20;




  constructor(public datasource: DatasourceService) { }

  ngOnInit() {
  }


  public updateUX(par: string) {
    this.datasource.updateData(par).subscribe(data => {
      this.currentTemp = +data[0];
    });
  }

}
