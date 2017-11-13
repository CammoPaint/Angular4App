import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';

// import a local data service
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { AlertComponent } from './components/alert/alert.component';

const appRoutes: Routes = [
  {path:'',component:UserComponent},
  {path:'posts',component:PostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
