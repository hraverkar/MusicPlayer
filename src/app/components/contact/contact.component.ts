import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onAction1() {
    const url = 'https://hraverkar.netlify.app';
    window.open(url, '_blank');
  }
}
