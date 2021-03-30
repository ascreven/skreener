import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  filters: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data;

    this.getFilters(data.filters);
  }

  getFilters(dataFilters: any) {
    console.log(dataFilters);
    dataFilters.forEach(element => {
      console.log(element);
      const filter = {
        title: "Genres",
        options: element,
        show: false
      };
      this.filters.push(filter);
    });
  }

  dropdownToggle(filter: any) {
    filter.show = !filter.show;
  }
}
