import { Component } from '@angular/core';
import { GetReposListService } from '../get-repos-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private repoList: GetReposListService){}

  displayProjects(){
    this.repoList.generateReposList();
  }

}
