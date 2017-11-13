import { Component, OnInit } from '@angular/core';

// services
import { PostService } from '../../services/post.service';

// models
import { Post } from "../../models/post";
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts:Post[];
  post:NewPost = new NewPost();
  alert:Alert;

  constructor(private dataService:PostService) { }

  ngOnInit() {
    // get the post data
    this.dataService.list().subscribe
    (
      data => {
        this.posts = data;
      });

  }

  onSelectClick(post:Post) {
    console.log(post);
  }

  insert(post:Post) {
    

    this.dataService.create(post).subscribe
    (
      data => {
        // add the new item to the array
        this.posts.unshift(data);
        // clear the new post object
        this.post = new NewPost();
        // display alert
        this.alert = {type:'success',title:'Created', msg:'New post added',timeout:5000};
      });
  }
}

// implement Post for creating new posts???
class NewPost implements Post {
  body:string;
  id:number;
  title:string;
  userId:number;
} 