import { Component } from '@angular/core';
import { GetReposListService } from '../get-repos-list.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  repoProjectsList: any;
  result:any;

  constructor(private repoList: GetReposListService, private appCompTS: AppComponent){}

  async displayProjects(){
    this.appCompTS.showProjectsArea();
    this.repoProjectsList = await this.repoList.generateReposList();
  }



}
