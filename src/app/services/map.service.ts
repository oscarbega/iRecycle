import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { GeoPoint } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore/lite';
import { Geopoint, geohashQueryBounds } from 'geofire-common';

@Injectable({
  providedIn: 'any'
})
export class MapService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getContainers(lat:number,long:number){
    const position:Geopoint = [lat,long]
    const radius = 1000
    const bounds = geohashQueryBounds(position,radius)
    const promises = []
    for(const b of bounds){
      const q = this.afs.collection('Containers',ref=>
        ref.orderBy('geohash').startAt(b[0]).endAt(b[1])
      )
      promises.push(
        new Promise<any>((resolve)=>{
          q.valueChanges().subscribe(res=>{
            resolve(res)})
        })
      )
    }
    return Promise.all(promises)
  }
}
