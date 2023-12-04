import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './movie-view/movie-view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortPipe } from './commons/pipes/sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    SortPipe,
    MovieDetailComponent,
    MoviesContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    YouTubePlayerModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
