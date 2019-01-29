import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeadService {
  constructor() {
    console.log(`I'm a dead service :(`);
  }
}
