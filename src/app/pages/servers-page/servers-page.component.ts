import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers-page',
  templateUrl: './servers-page.component.html',
  styleUrls: ['./servers-page.component.css']
})
export class ServersPageComponent implements OnInit {

  constructor(
    private router: Router,
    // private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  public onReload(): void {
    this.router.navigate(['/servers']);
    // this.router.navigate(['service'], { relativeTo: this.route });
  }
}
