import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService{
    constructor(private _http: Http) {}

    getPosts(): Observable<any> {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
}