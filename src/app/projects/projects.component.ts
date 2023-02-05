import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetReposListService } from '../get-repos-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsNameList: string[] = [];

  constructor(private http: HttpClient, private repoList: GetReposListService){}

  displayProject(){
    console.log(this.repoList.generateReposList());
    this.projectsNameList = this.repoList.generateReposList();
    console.log(this.projectsNameList);
  }
}
