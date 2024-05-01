import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit,AfterViewInit {

  private map:any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initMap()
  }

  initMap(){
    this.map = L.map('map',{
      center:[0,0],
      zoom: 3
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:18,
      minZoom:3,
    })

    tiles.addTo(this.map)
  }

}
