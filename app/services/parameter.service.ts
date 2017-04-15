import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParameterService{
    private parameterUrl = '//www.json-generator.com/api/json/get/chozaoyyGa?indent=2'
    
    constructor(private _http: Http){
        console.log('parameter service ...');
    }
    
    getParameter(){
        return this._http.get(this.parameterUrl)
            .map(response => response.json());
    }

    
}
