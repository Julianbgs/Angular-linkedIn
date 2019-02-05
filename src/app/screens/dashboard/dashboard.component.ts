import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../app.component.scss', './dashboard.component.scss'],
})
export class DashboardComponent implements  OnInit {
    dtOptions: DataTables.Settings = {};

    ngOnInit(): void {
        this.dtOptions = {
            ajax: 'http://jsonplaceholder.typicode.com/posts',
            columns: [{
                title: 'ID',
                data: 'id'
            }, {
                title: 'UserId',
                data: 'userId'
            }]
        };
    }
}
