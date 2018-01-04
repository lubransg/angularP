import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class VariableService {
  public bLoggIn = new BehaviorSubject(false);
  constructor() { }

}
