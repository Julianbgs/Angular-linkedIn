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
            ajax: {url: 'https://amazonbot.dimatech.org/api/v1/marketplace/', dataSrc:'' },
            columns: [{
                title: 'url',
                data: 'url'
            }, {
                title: 'market',
                data: 'marketPlaceName'
            }, {
                title: 'actions',
                render: function (data, type, full, meta){
                    return '<td class="text-right">' +
                        '<button class="btn btn-primary" (click)="alert()">View</button>' +
                        '<button class="btn btn-primary" (click)="alert()">Delete</button>';
                }
            }
               ]
        };
    }
}
