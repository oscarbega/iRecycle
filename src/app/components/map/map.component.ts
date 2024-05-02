import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'
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

  async ngAfterViewInit(): Promise<void> {
    await this.initMap()
  }

  async initMap(){
    let location = await Geolocation.getCurrentPosition()
    this.map = L.map('map',{
      center:[location.coords.latitude,location.coords.longitude],
      zoom: 18
    })

    const positionMarker = L.marker(L.latLng(location.coords.latitude,location.coords.longitude))

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:18,
      minZoom:3,
    })

    tiles.addTo(this.map)
    positionMarker.addTo(this.map)
  }



}
