import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetReposListService } from '../get-repos-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsNameList: string[] = [];

  constructor(private http: HttpClient, private repoList: GetReposListService){}

  ngOnInit(): void {
    this.projectsNameList = this.repoList.repoNamesList;
  }

}
