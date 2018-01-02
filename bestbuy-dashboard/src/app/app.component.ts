import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];
  stageValues: Array<any> = [];
  devValues: Array<any> = [];
  prodValues: Array<any> = [];
  selectedServer: any;

  constructor(private serverService: ServerService) {}
  onStage() {
  const serUrls = ['https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights',
    'https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights'];

    if (this.stageValues.length === 0) {
      serUrls.forEach(each => {
        this.serverService.getServers(each)
          .subscribe(
            (servers: any[]) => {this.servers = servers;
              this.stageValues.push(this.servers[0].ACTUAL_ARV_DEPRT);
              console.log('server data', this.servers)},
            (error) => console.log(error)
          );
      });
    }
    this.selectedServer = 'stageServer';

    }

  onDev() {
    const serUrls = ['https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights',
      'https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights'];

    if (this.devValues.length === 0) {
      serUrls.forEach(each => {
        this.serverService.getServers(each)
          .subscribe(
            (servers: any[]) => {this.servers = servers;
              this.devValues.push(this.servers[3].ACTUAL_ARV_DEPRT);
              console.log('server data', this.servers)},
            (error) => console.log(error)
          );
      });
    }
    this.selectedServer = 'devServer';

  }
  onProd() {
    const serUrls = ['https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights',
      'https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights'];

    if (this.prodValues.length === 0) {
      serUrls.forEach(each => {
        this.serverService.getServers(each)
          .subscribe(
            (servers: any[]) => {this.servers = servers;
              this.prodValues.push(this.servers[5].ACTUAL_ARV_DEPRT);
              console.log('server data', this.servers)},
            (error) => console.log(error)
          );
      });
    }
    this.selectedServer = 'prodServer';

  }
}
