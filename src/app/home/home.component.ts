import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataset: any;
  strUser: any;
  searchText: any;
  data: any;


  private url = 'https://jsonplaceholder.typicode.com/users';

  public getJSON(): Observable<any>{
    return this.http.get(this.url);
  }
  constructor(private http: HttpClient, private router: Router) {
    this.getJSON().subscribe(heroes => {
      this.dataset = heroes;
    } );

   }

   getPosts(data: any): void{

    this.router.navigate(['/posts', data.id]);

   }

  ngOnInit(): void {
  }

}


