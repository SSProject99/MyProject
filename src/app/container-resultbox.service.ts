import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerResultboxService {
  private showResultbox!: boolean;
  private encryptedValue!: boolean;
  encryptedValueUpdated = new EventEmitter<string>();

  setShowResultboxValue(value: boolean): void {
    this.showResultbox = value;
  }

  getShowResultboxValue(): boolean {
    return this.showResultbox;
  }

  setEncryptedValue(value: any): void {
    this.encryptedValue = value;
    this.encryptedValueUpdated.emit(value);
  }

  getEncryptedValue(): any {
    return this.encryptedValue;
  }
  constructor() { }
}
