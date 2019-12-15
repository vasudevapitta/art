import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {
icons: Array<{url: string, title: string, src: string, altText: string}> = [
{
"url":"https://www.facebook.com/vasudevaartschool",
"title":"Vasudeva art school Facebook page",
"src":"assets/icons/fb.svg",
"altText":"link to vasudeva art school facebook page",
},
{
"url":"https://instagram.com/vasudevaartschool",
"title":"Vasudeva art school Instagram page",
"src":"assets/icons/insta.svg",
"altText":"link to vasudeva art school instagram page",
}
];
  constructor() { }

  ngOnInit() {
  }

}
