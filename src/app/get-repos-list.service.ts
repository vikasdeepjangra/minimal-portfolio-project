import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetReposListService {

  repoNamesList: string[] = [];

  constructor(private http: HttpClient) { }

  generateReposList(): string[]{
    let headers = new HttpHeaders;

    const url = "https://api.github.com/users/vikasdeepjangra/repos";
    this.http.get<any>(url, {
      headers: headers
    }).subscribe(result =>{
      //console.log(result);
      for(let i=0; i<result.length; i++){
        this.repoNamesList[i] = result[i].name;
      }
      //console.log(this.repoNamesList);
      console.log("Called First");
    })
    console.log("Called Later!")
    return this.repoNamesList;
  }

}
