import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(
    private http: HttpClient
  ) { }


private getDataRequest(url: string) {
  return this.http.get(url)
    .pipe(
      catchError(() => of([])),
      //delay(2000)
    );
}


 postData(url: string, body: any = {} ) {
  return this.http.post(url,body)
    .pipe(
      catchError(() => of([])),
      //delay(2000)
    );
}

getData(url: string ) {
  return this.http.get(url)
    .pipe(
      catchError(() => of([])),
      //delay(2000)
    );
}






}


