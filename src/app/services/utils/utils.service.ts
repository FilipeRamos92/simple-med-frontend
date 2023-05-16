import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
