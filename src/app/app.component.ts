import { Component, OnInit } from '@angular/core';
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
  constructor(private rs : RestService){}

  columns = ["UUID"];
  index   = ["uuid"];
   recipe: Recipe[] = new Array<Recipe>()
  ngOnInit(): void {
    this.rs.getRecipes().subscribe
    (
      (response)=> {
        this.recipe = response;
       
      },
       (error)=>
       {
         console.log("Error Occured :" + error);
       }
          
    )
  }
}
