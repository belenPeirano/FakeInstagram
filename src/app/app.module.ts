import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { DiscoverComponent } from './Pages/discover/discover.component';
import { PhotoRollComponent } from './components/photo-roll/photo-roll.component';
import { PostComponent } from './components/post/post.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { PostsGridComponent } from './components/posts-grid/posts-grid.component';
import { UserComponent } from './components/user/user.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatsComponent } from './Pages/chats/chats.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SearchComponent } from './Pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    DiscoverComponent,
    PhotoRollComponent,
    PostComponent,
    ShowPostComponent,
    PostsGridComponent,
    UserComponent,
    ChatPreviewComponent,
    ChatComponent,
    ChatsComponent,
    ProfileComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
