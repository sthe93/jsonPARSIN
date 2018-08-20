import { ListingPage } from './../listing/listing';
import { CourseServiceProvider } from './../../providers/course-service/course-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  courses:any
  data: any
  arrayCourses = []
  constructor(public navCtrl: NavController, private courseServiceProvider: CourseServiceProvider) {
    courseServiceProvider.getCourse().subscribe(res => { 
  
    this.courses = res;
      this.arrayCourses = this.courses.courses;
      console.log("response:", res);
  });

  }
  list(course: any) {
    this.navCtrl.push(ListingPage, {data:course});
  }
}

<ion-list>
    <ion-item>
            <ion-label>city</ion-label>
            <ion-select [(ngModel)]="city">
              <ion-option value="pretoria">Pretoria</ion-option>
              <ion-option value="johannesburg">Johannesburg</ion-option>
              <ion-option value="tembisa">Tembisa</ion-option>
              <ion-option value="nelspruit">Nelspruit</ion-option>
              <ion-option value="polokwane">Polokwane</ion-option>
              <ion-option value="capetown">Capetown</ion-option>
            </ion-select>
          
    </ion-item>
  </ion-list>

  <ion-card class="card-ion">
    <ion-card-content>
      <ion-card-header>Details</ion-card-header>
      <ion-grid class="card-list">
        <ion-row class="rowDetail">
          <ion-col col-6 class="itemName">
            <ion-icon name="cloud"></ion-icon>
            Main Weather
          </ion-col>
          <ion-col col-6 class="col_ion"></ion-col>
        </ion-row>
        <ion-row class="rowDetail">
          <ion-col col-6 class="itemName">
            <ion-icon name="calendar"></ion-icon>
            Description
          </ion-col>
          <ion-col col-6 class="col_ion"></ion-col>
        </ion-row>
       
        <ion-row class="rowDetail">
          <ion-col col-6 class="itemName">
            <ion-icon name="thermometer"></ion-icon>
            Temparature
          </ion-col>
          <ion-col col-6 class="col_ion"></ion-col>
        </ion-row>
        <ion-row class="rowDetail">
          <ion-col col-6 class="itemName">
            <ion-icon name="umbrella"></ion-icon>
            Humidity
          </ion-col>
          <ion-col col-6 class="col_ion"></ion-col>
        </ion-row>
        <ion-row class="rowDetail">
          <ion-col col-6 class="itemName">
            <ion-icon name="calendar"></ion-icon>
            Date
          </ion-col>
          <ion-col col-6 class="col_ion"></ion-col>
        </ion-row>
     
        <ion-row class="rowDetail">
          <ion-col col-6 class="itemName">
            <ion-icon name="ios-globe"></ion-icon>
            WindSpeed
          </ion-col>
          <ion-col col-6 class="col_ion"></ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <ion-header>
  <ion-navbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

    <button ion-item *ngFor="let weather of weather" detail-none>
        <h2>{{weather.id}}</h2>
        <h2>{{weather.main}}</h2>
        <h3>{{weather.description}}</h3>
        <ion-icon name="{{weather.icon}}"item-left></ion-icon>
     
      </button>

 
  
</ion-content>



<ion-header>
    <ion-navbar>
      <ion-title>iWeather</ion-title>
    </ion-navbar>
   </ion-header>
   
   <ion-content padding>
    <button ion-item *ngFor="let weather of weatherdata" detail-none>
      <h2>{{weather.id}}</h2>
      <h2>{{weather.main}}</h2>
      <h3>{{weather.description}}</h3>
      <ion-icon name="{{weather.icon}}"item-left></ion-icon>
   
    </button>
   
      <ion-row>
      <ion-col width-100>
      <ion-list>
        <button ion-item *ngFor="let weather of main" detail-none>
          <ion-item>
            <strong>Temp:</strong>weather{{main.temp}}
          </ion-item>
   
          <ion-item>
            <strong>Humidity:</strong>{{main.humidity}}
          </ion-item>
   
          <ion-item>
              <strong>Wind:</strong>{{main.wind}}
            </ion-item>
            <ion-item>
                <strong>Description:</strong>
          </ion-item>
   
          <ion-item>
              <strong>Date:</strong>{{main.im}}
            </ion-item>
   
        </button>
      </ion-list>
      </ion-col>
      </ion-row>
   
   </ion-content>

