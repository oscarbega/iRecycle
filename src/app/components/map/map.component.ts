import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'
import { GeoPoint } from 'firebase/firestore';
import * as L from 'leaflet'
import { MapService } from 'src/app/services/map.service';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements AfterViewInit {

  private map:L.Map | undefined;
  private markerLayer: L.LayerGroup| undefined
  provider:OpenStreetMapProvider;
  searchValue:string = "";
  results:any[] = []
  containerIcons = {
     iconygbg : L.icon({
      iconUrl:"../../../assets/markerIcons/contYGBg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    iconygg : L.icon({
      iconUrl:"../../../assets/markerIcons/contYGg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    iconyg : L.icon({
      iconUrl:"../../../assets/markerIcons/contYg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    iconybg : L.icon({
      iconUrl:"../../../assets/markerIcons/contYBg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    icongg : L.icon({
      iconUrl:"../../../assets/markerIcons/contGg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    icongbg : L.icon({
      iconUrl:"../../../assets/markerIcons/contGBg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    iconbg : L.icon({
      iconUrl:"../../../assets/markerIcons/contBg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    }),
    icong : L.icon({
      iconUrl:"../../../assets/markerIcons/contg.svg",
      iconSize:[50,50],
      iconAnchor:[25,25]
    })
  }

  constructor(
    private mapService:MapService
  ) { 
    this.provider = new OpenStreetMapProvider();
  }


  async ngAfterViewInit(): Promise<void> {
    await this.initMap()    
  }

  async formUpdate(){
    this.results = await this.provider.search({query:this.searchValue})
  }

  async onSubmit(){
    const results = await this.provider.search({query:this.searchValue})
    this.map?.flyTo(L.latLng(results[0].y,results[0].x),18)
    this.loadContainers(results[0].y,results[0].x)
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
        iconUrl:"../../../assets/markerIcons/position.svg"
      })
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:20,
      minZoom:3
    })

    tiles.addTo(this.map)
    positionMarker.addTo(this.map)
    await this.loadContainers(location.coords.latitude,location.coords.longitude)

    this.map.on('moveend', async () => {
      const center = this.map?.getCenter();
      if (center == undefined) {
        return;
      }
      await this.loadContainers(center.lat, center.lng);
    });
  }

  async loadContainers(lat:number,long:number){
    if(this.markerLayer){
      this.map?.removeLayer(this.markerLayer)
    }
    this.markerLayer = new L.LayerGroup()
    const containers = await this.mapService.getContainers(lat,long)
    const processedContainers: Array<any> = [].concat(...containers)
    processedContainers.forEach(c=>{
      if(c.coordinates!=undefined){
        const position:GeoPoint = c.coordinates

        const containerMarker = L.marker(
          L.latLng(position.latitude,position.longitude),
        )

        
        if (c.haveBlue && c.haveYellow && c.haveGreen) {
          containerMarker.setIcon(this.containerIcons.iconygbg);
        } else if (c.haveBlue && c.haveYellow){
          containerMarker.setIcon(this.containerIcons.iconybg);
        } else if (c.haveBlue){
          containerMarker.setIcon(this.containerIcons.iconbg);
        } else if (c.haveYellow && c.haveGreen){
          containerMarker.setIcon(this.containerIcons.iconygg);
        } else if (c.haveYellow){
          containerMarker.setIcon(this.containerIcons.iconyg);
        } else if (c.haveBlue && c.haveGreen){
          containerMarker.setIcon(this.containerIcons.iconygg);
        } else if (c.haveGreen){
          containerMarker.setIcon(this.containerIcons.icongg);
        } else {
          containerMarker.setIcon(this.containerIcons.icong);
        }
        
        
        const popup =new L.Popup().setContent(
          `
          <h3>Contenedores disponibles</h3>
          <ul>
          <li>Contenedor General</li>
          ${c.haveBlue ? "<li>Contenedor de papel</li>":""}
          ${c.haveGreen ? "<li>Contenedor de vidrio</li>":""}
          ${c.haveYellow ? "<li>Contenedor de plástico</li>":""}
          </ul>
          `
        )

        containerMarker.bindPopup(popup)
        if(this.map == undefined){
          throw new Error("mapa sin definir")
        }
        this.markerLayer?.addLayer(containerMarker)
        this.markerLayer?.addTo(this.map)
        }
    })
  }

}
