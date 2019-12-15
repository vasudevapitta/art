import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-comp',
  templateUrl: './hero-comp.component.html',
  styleUrls: ['./hero-comp.component.css']
})
export class HeroCompComponent implements OnInit {
valueProposition: string="Get the Amazing Transformational Art Skills";
tagLine: string="Compare your artwork before & after";
heroImg: string="assets/images/ralph.jpg";
heroImgAltText: string="picture of Ralph Waldo Emerson";

  constructor() { }

  ngOnInit() {
  }

}
