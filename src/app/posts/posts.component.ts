import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public postId: any;
  dataset: any;
  searchText: any;
  private url: any;
  public getJSON(): Observable<any>{
    return this.http.get(this.url);
  }
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const id = this.route.snapshot.paramMap.get('id');
    this.postId = id;
    this.url = 'https://jsonplaceholder.typicode.com/posts/?userId=' + this.postId;
    this.getJSON().subscribe(heroes => {
      this.dataset = heroes;

    } );
  }

  ngOnInit(): void {

  }

}
