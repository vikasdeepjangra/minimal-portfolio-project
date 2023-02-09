import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentArea = true;

  isDarkTheme: any = true;

  showProjectsArea(){
    this.contentArea = false;
  }

  themeToggle(){
    console.log("Inside App.component.Ts");
    this.isDarkTheme = !this.isDarkTheme;
    console.log(this.isDarkTheme)
  }

}
