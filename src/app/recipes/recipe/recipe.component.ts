import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeDetail: any;
  recipe: any;
  ingredient: any;
  recipe_id: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.dataService.getRecipeDetail(id).then((result) => {
        this.recipeDetail = result;
      });
    });
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }
}
