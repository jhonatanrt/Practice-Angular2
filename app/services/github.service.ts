import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'eb616804c1f6a51e9c67';
    private client_secret = '0f72d83a01597102f29b82b376c57ccf51b46858';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepost(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}