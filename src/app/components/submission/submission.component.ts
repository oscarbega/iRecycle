import {Component, ElementRef} from '@angular/core';
import {TrashSubmission} from "../../interfaces/trash-submission";
import {Timestamp} from "@angular/fire/firestore";
import { getStorage } from "firebase/storage";
import {ref, uploadBytes} from "@angular/fire/storage";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Geolocation} from "@capacitor/geolocation";
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss'],
})
export class SubmissionComponent   {
  submission: TrashSubmission;
  photo: File | undefined;
  location: any;
  @ViewChild('file1')
  myInputVariable: ElementRef | undefined;
  constructor(private afs: AngularFirestore,) {
    this.submission = {
      blue : "",
      green : "",
      grey : "",
      yellow : "",
      id: "",
      photoRef: "",
      latitude: "",
      longitude: "",
      fecha: Timestamp.now()
    }
  }



  async submit(){
    try {
      await Geolocation.requestPermissions();
      this.location = await Geolocation.getCurrentPosition({enableHighAccuracy:true})
    } catch (error) {
      this.location = await Geolocation.getCurrentPosition()
    }


    if(this.photo != undefined && this.photo.type.split("/")[0] == "image" && (this.submission.yellow != "" ||
      this.submission.blue != "" || this.submission.green != "" ||
      this.submission.grey != "" )){
      const storage = getStorage();
      const storageRef = ref(storage, 'images');
      const imageRef = ref(storageRef,Timestamp.now().valueOf()+"."+this.photo.type.split("/")[1]);
      uploadBytes(imageRef, this.photo).then((snapshot) => {
      });

      const id = this.afs.createId();

      const docRef = this.afs.collection('Submissions').doc(id);
      this.submission.id = id
      this.submission.fecha = Timestamp.now()
      this.submission.latitude = this.location.coords.latitude
      this.submission.longitude = this.location.coords.longitude
      this.submission.photoRef = imageRef.fullPath

      docRef.set(this.submission, { merge: true }).then(() => {
      });
    }else{
      if(this.photo != undefined && this.photo.type.split("/")[0] != "image"
        && this.myInputVariable != undefined){
        this.myInputVariable.nativeElement.value = "";
      }
    }
  }

  onProfilePicSelected(input: any) {
    this.photo = input.files[0];
  }

  onYellowSelected(input: any) {
    this.submission.yellow = input.value
  }

  onBlueSelected(input: any) {
    this.submission.blue = input.value

  }

  onGreenChange(input: any) {
    this.submission.green = input.value
  }

  onGreyChange(input: any) {
    this.submission.grey = input.value
  }
}
