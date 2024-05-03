import { Timestamp } from '@angular/fire/firestore';

export interface TrashSubmission {
  grey: number,
  blue: number,
  yellow: number,
  green: number,
  photoRef: string,
  uid: string,
  fecha: Timestamp
}
