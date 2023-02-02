import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  ingrRecipes: any;
  search!: string;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let name = params['name'];
      this.dataService.getIngrRecipeFromApi(name).then((result) => {
        console.log(result);
        this.ingrRecipes = result;
      });
    });
  }
  goBack() {
    this.router.navigate(['/recipes']);
  }
}
