import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { HomeComponent } from './home/home.component';
import { NestedComponent } from './nested/nested.component';
import { FirstComponent } from './nested/first/first.component';
import { SecondComponent } from './nested/second/second.component';
import { ThirdComponent } from './nested/third/third.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'simple',
        component: SimpleComponent
    },
    {
        path: 'nested',
        component: NestedComponent
    },
    {
        path: 'http',
        component: HttpComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    HomeComponent,
    NestedComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
