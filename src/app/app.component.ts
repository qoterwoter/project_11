import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  sensors: mySensor[] = [
    {id: 1,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 2,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 3,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 4,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 5,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 6,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 7,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 8,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 9,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
    {id: 10,name:"Детектор", status: Boolean(this.getRandom(1)), show: true},
  ]

  getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max+1));
  }
  createSensor(sensor_name) {
    this.sensors.push({id: this.sensors.length+1,name:sensor_name, status: Boolean(this.getRandom(1)), show: true})
  }
}
