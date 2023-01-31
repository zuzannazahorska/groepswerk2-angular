import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css'],
})
export class DietComponent {
  filteredRecipes: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.dataService.getDiet(id).then((result) => {
        console.log(result);
        this.filteredRecipes = result;
      });
    });
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }
}
