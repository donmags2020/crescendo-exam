import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Recipe } from './Recipe';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'crescendo-exam';
  uuid: any[] | undefined;
  title: any[]  | undefined;
  thumbnail: any;
  constructor(private rs : RestService, private sanitizer: DomSanitizer){}

  columns = ["UUID"];
  index   = ["uuid","images","full"];
  recipe: Recipe[] = new Array<Recipe>()
  ngOnInit(): void {
    this.rs.getRecipes().subscribe
    (
      
      (response)=> {
       
        this.recipe = response;
        let objectURL = 'data:image/jpeg;base64,' ;

        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
      },
       (error)=>
       {
         console.log("Error Occured :" + error);
       }
          
    )
  }
}
