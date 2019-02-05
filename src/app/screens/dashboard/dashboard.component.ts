import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../services/user.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../app.component.scss', './dashboard.component.scss'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {
    dataTable: any;
    response: string;
    constructor(private _httpService: HttpService) {
        this._httpService.getPosts()
            .subscribe(
                response => this.response = response,
                error => console.log(error)
            );
    }

  ngOnInit() {

      const table: any = $('table');
      this.dataTable = table.DataTable();


  }
}
