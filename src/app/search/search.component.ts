import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm: String = '';

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe((params) => {
      
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  search(): void {
    console.log(this.searchTerm);
    if (this.searchTerm) {
      this.router.navigateByUrl('search/' + this.searchTerm);
    }
    // this.route.navigate("/search");
  }
}
