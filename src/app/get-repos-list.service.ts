import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetReposListService {

  repoNamesList: string[] = [];

  constructor(private http: HttpClient) { }

  generateReposList(){
    return new Promise((resolve, reject) =>{
      let headers = new HttpHeaders;
      const url = "https://api.github.com/users/vikasdeepjangra/repos";
      
      this.http.get<any>(url, {
            headers: headers
      }).subscribe(result =>{
          for(let i=0; i<result.length; i++){
            this.repoNamesList[i] = result[i].name;
          }
          resolve(this.repoNamesList);
      })
    });
  } 

}
