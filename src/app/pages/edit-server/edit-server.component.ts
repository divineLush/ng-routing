import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  allowEditParam: string = '';
  fragment: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.allowEditParam = this.route.snapshot.queryParams['allowEdit'];
    // this.fragment = this.route.snapshot.fragment;

    this.route.queryParams.subscribe(data => {
      this.allowEditParam = data['allowEdit'];
    });

    this.route.fragment.subscribe(data => {
      this.fragment = data;
    });
  }

}
