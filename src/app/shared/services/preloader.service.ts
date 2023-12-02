import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root'
})
export class PreloaderService{

  completed(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
}
