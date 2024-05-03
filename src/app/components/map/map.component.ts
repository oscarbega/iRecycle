import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'
import { GeoPoint } from 'firebase/firestore';
import * as L from 'leaflet'
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements AfterViewInit {

  private map:any;

  constructor(
    private mapService:MapService
  ) { }


  async ngAfterViewInit(): Promise<void> {
    await this.initMap()
  }

  async initMap(){
    
    
    let location
    try {
      await Geolocation.requestPermissions();
      location = await Geolocation.getCurrentPosition({enableHighAccuracy:true})
    } catch (error) {
      location = await Geolocation.getCurrentPosition()
    }
    this.map = L.map('map',{
      center:[location.coords.latitude,location.coords.longitude],
      zoom: 18,
      zoomControl: false
    })

    const positionMarker = L.marker(L.latLng(location.coords.latitude,location.coords.longitude),{
      icon:L.icon({
        iconUrl:"../../../assets/markerIcons/contYGBg.svg"
      })
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:18,
      minZoom:3
    })

    tiles.addTo(this.map)
    positionMarker.addTo(this.map)
    await this.loadContainers(location.coords.latitude,location.coords.longitude)
  }

  async loadContainers(lat:number,long:number){
    const iconygb = L.icon({
      iconUrl:"../../../assets/markerIcons/contYGBg.svg"
    })
    const containers = await this.mapService.getContainers(lat,long)
    const processedContainers: Array<any> = [].concat(...containers)
    processedContainers.forEach(c=>{
      console.log(c)
      if(c.coordinates!=undefined){
        const position:GeoPoint = c.coordinates
        const containerMarker = L.marker(
          L.latLng(position.latitude,position.longitude),
          {
            icon:iconygb
          }
        )
        containerMarker.addTo(this.map)
        }
    })
  }

}
