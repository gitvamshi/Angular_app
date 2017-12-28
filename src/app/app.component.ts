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
  // firstValue: string;
  // values: [] = [];
   public serUrls = 'https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights';
  //   'https://us-central1-cargomgrio-test.cloudfunctions.net/getInboundFlights'];
  constructor(private serverService: ServerService) {}
  onGet() {
    // for (const serurls of this.serUrls) {
      this.serverService.getServers(this.serUrls)
        .subscribe(
          (servers: any[]) => {this.servers = servers; console.log('server data', this.servers)},
          (error) => console.log(error)
        );
      // this.firstValue = this.servers[0].ACTUAL_ARV_DEPRT;
      // this.values.push({'ACTUAL_ARV_DEPRT': this.servers});
      // }
    }
}
