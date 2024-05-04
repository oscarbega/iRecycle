import { Timestamp } from '@angular/fire/firestore';

export interface TrashSubmission {
  grey?: string,
  blue?: string,
  yellow?: string,
  green?: string,
  photoRef?: string,
  id?: string,
  fecha?: Timestamp,
  latitude?: string,
  longitude?: string
}
