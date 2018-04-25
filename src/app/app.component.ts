import { Component, OnInit } from '@angular/core';
import { DatasourceService } from './datasource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  public lampTempOn = false;
  public tempLampStatus = 2;
  public lampLumOn = false;
  public lumLampStatus = 2;
  
  public currentTemp = 20;
  public currentLum = false;
  public LastAlertSec = 3500;
  public LastAlertDegree = 0;


  public isReloading = false;
  
  constructor(public datasource: DatasourceService) { }

  ngOnInit() {
    this.updateUX();
  }

  public updateUX(par: string = '') {
    this.datasource.updateData(par).subscribe(data => {

      this.lampTempOn = data[0] === '1';
      this.tempLampStatus = +data[1];
      this.lampLumOn = data[2] === '1';
      this.lumLampStatus = +data[3];
 
      this.currentTemp = +data[4];
      this.currentLum = data[5] === '1';
 
      this.LastAlertSec = +data[6];
      this.LastAlertDegree = +data[7];

    });
  }

  public imageCurrentLum(): string {
    return this.currentLum ? '/assets/sun.png' : '/assets/moon.png';
  }
  public imageLum(): string {
    return this.lampLumOn ? '/assets/idea.png' : '/assets/ideaoff.png';
  }
  public imageTemp(): string {
    return this.lampTempOn ? '/assets/idea.png' : '/assets/ideaoff.png';
  }


  public btnTempActive(n: number): boolean {
    return this.tempLampStatus === n;
  }
  public btnLumActive(n: number): boolean {
    return this.lumLampStatus === n;
  }

  public isDanger(): boolean {
    return this.LastAlertSec < 3600;
  }

  public reload() {
    this.isReloading = true;
    setTimeout(() => {
      this.isReloading = false;
    }, 1100);
    this.updateUX();
  }
}
