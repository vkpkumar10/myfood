import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('searchTerm'));
      const searchItem = params.get('searchTerm');
      if (searchItem) {
        this.foods = this.foodService
          .getAllimg()
          .filter((f) =>
            f.name
              .toLowerCase()
              .includes(searchItem.toLocaleLowerCase())
          );
      } else {
        this.foods = this.foodService.getAllimg();
      }
    });
  }
}
