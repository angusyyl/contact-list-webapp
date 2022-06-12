import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * Compare two values alphabetically or in size
   * @param v1 any value
   * @param v2 the other value
   * @returns -1 if first value is less than second value, zero if they're equal and 1 otherwise
   */
  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
}
