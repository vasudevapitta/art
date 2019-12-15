import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
note: string="Required supplies can be purchased at Michaels, Hobby lobby, Dickblick, Amazon or your favorite store :)";
name: string="Vasudeva Pitta";
location: string="Collierville, TN";
phoneNumber: string="+1 732 789 0005";
  constructor() { }

  ngOnInit() {
  }

}