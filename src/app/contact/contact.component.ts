import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',],
  styles: ['agm-map { height: 300px;}']
})

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lat: number = 51.678418;
  lng: number = 7.809007;
}
