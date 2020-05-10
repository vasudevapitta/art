import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery01',
  templateUrl: './gallery01.component.html',
  styleUrls: ['./gallery01.component.css']
})
export class Gallery01Component implements OnInit {
genericImgAltText: string = "Artwork by Vasudeva";
oil: string = "Oil on canvas";
acrylic: string = "Acrylic on canvas";
charcoal: string = "Charcoal on paper";
pencil: string = "Pencil on paper";
eight_ten: string = "8 x 10\" inches";
eleven_fifteen: string = "11 x 15\" inches";
eighteen_twentyFour: string = "18 x 24\" inches";
sixteen_twenty: string = "16 x 20\" inches";
twelve_sixteen: string = "12 x 16\" inches";
twentyFour_thirty: string = "24 x 30\" inches";
personal_collection:string = "Personal Collection";
available:string = "Available";
sold:string = "Sold";
images: Array<{src: string, altText: string, title: string, medium: string, size: string, status: string}> = [
{
	"src":"assets/images/34.jpg",
	"altText":this.genericImgAltText,
	"title":"Play time",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/33.jpg",
	"altText":this.genericImgAltText,
	"title":"Game of drones",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/32.jpg",
	"altText":this.genericImgAltText,
	"title":"Pyar corona",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/31.jpg",
	"altText":this.genericImgAltText,
	"title":"Portrait of my mother",
	"medium":this.oil,
	"size":this.twelve_sixteen,
	"status":this.personal_collection
},
{
	"src":"assets/images/30.jpg",
	"altText":this.genericImgAltText,
	"title":"Lovely nightmare",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/29.jpg",
	"altText":this.genericImgAltText,
	"title":"Avocado",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/28.jpg",
	"altText":this.genericImgAltText,
	"title":"Questions",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/27.jpg",
	"altText":this.genericImgAltText,
	"title":"Self hand study",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/26.jpg",
	"altText":this.genericImgAltText,
	"title":"Figure study 01",
	"medium":this.charcoal,
	"size":this.twentyFour_thirty,
	"status":this.available
},
{
	"src":"assets/images/25.jpg",
	"altText":this.genericImgAltText,
	"title":"Pears still life",
	"medium":this.charcoal,
	"size":this.twelve_sixteen,
	"status":this.available
},
{
	"src":"assets/images/24.jpg",
	"altText":this.genericImgAltText,
	"title":"Portrait of a mother & child",
	"medium":this.oil,
	"size":this.twelve_sixteen,
	"status":this.sold
},
{
	"src":"assets/images/23.jpg",
	"altText":this.genericImgAltText,
	"title":"Portrait of a homeless man",
	"medium":this.charcoal,
	"size":this.eleven_fifteen,
	"status":this.available
},
{
	"src":"assets/images/22.jpg",
	"altText":this.genericImgAltText,
	"title":"Portrait of David Bowie",
	"medium":this.charcoal,
	"size":this.eleven_fifteen,
	"status":this.sold
},
{
	"src":"assets/images/21.jpg",
	"altText":this.genericImgAltText,
	"title":"Portrait of woman",
	"medium":this.charcoal,
	"size":this.eleven_fifteen,
	"status":this.sold
},
{
	"src":"assets/images/20.jpg",
	"altText":this.genericImgAltText,
	"title":"Portrait of a homeless woman",
	"medium":this.charcoal,
	"size":this.eleven_fifteen,
	"status":this.available
},
{
	"src":"assets/images/19.jpg",
	"altText":this.genericImgAltText,
	"title":"Trompe l'oeil drawing",
	"medium":this.charcoal,
	"size":this.twentyFour_thirty,
	"status":this.available
},
{
	"src":"assets/images/18.jpg",
	"altText":this.genericImgAltText,
	"title":"Bliss",
	"medium":this.oil,
	"size":this.sixteen_twenty,
	"status":this.sold
},
{
	"src":"assets/images/17.jpg",
	"altText":this.genericImgAltText,
	"title":"Introspection",
	"medium":this.oil,
	"size":this.sixteen_twenty,
	"status":this.sold
},
{
	"src":"assets/images/16.jpg",
	"altText":this.genericImgAltText,
	"title":"Native American Indian",
	"medium":this.oil,
	"size":this.sixteen_twenty,
	"status":this.available
},
{
	"src":"assets/images/15.jpg",
	"altText":this.genericImgAltText,
	"title":"Majestic dreams",
	"medium":this.oil,
	"size":this.eighteen_twentyFour,
	"status":this.available
},
{
	"src":"assets/images/14.jpg",
	"altText":this.genericImgAltText,
	"title":"Opportunity",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/13.jpg",
	"altText":this.genericImgAltText,
	"title":"Rabbit and reflection",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/12.jpg",
	"altText":this.genericImgAltText,
	"title":"White peacock on chair",
	"medium":this.oil,
	"size":this.twentyFour_thirty,
	"status":this.sold
},
{
	"src":"assets/images/11.jpg",
	"altText":this.genericImgAltText,
	"title":"Young lady",
	"medium":this.oil,
	"size":this.sixteen_twenty,
	"status":this.available
},
{
	"src":"assets/images/10.jpg",
	"altText":this.genericImgAltText,
	"title":"Hookah cat",
	"medium":this.acrylic,
	"size":this.sixteen_twenty,
	"status":this.available
},
{
	"src":"assets/images/9.jpg",
	"altText":this.genericImgAltText,
	"title":"Goat",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.available
},
{
	"src":"assets/images/8.jpg",
	"altText":this.genericImgAltText,
	"title":"Dancer",
	"medium":this.pencil,
	"size":this.eleven_fifteen,
	"status":this.available
},
{
	"src":"assets/images/7.jpg",
	"altText":this.genericImgAltText,
	"title":"Scenery 01",
	"medium":this.pencil,
	"size":this.eleven_fifteen,
	"status":this.available
},
{
	"src":"assets/images/6.jpg",
	"altText":this.genericImgAltText,
	"title":"Fearless",
	"medium":this.oil,
	"size":this.twentyFour_thirty,
	"status":this.available
},
{
	"src":"assets/images/5.jpg",
	"altText":this.genericImgAltText,
	"title":"Cat and turtle",
	"medium":this.oil,
	"size":this.eight_ten,
	"status":this.sold
},
{
	"src":"assets/images/4.jpg",
	"altText":this.genericImgAltText,
	"title":"Scenery 02",
	"medium":this.acrylic,
	"size":this.eleven_fifteen,
	"status":this.available
},
{
	"src":"assets/images/3.jpg",
	"altText":this.genericImgAltText,
	"title":"Man\'s best friend",
	"medium":this.oil,
	"size":this.twentyFour_thirty,
	"status":this.sold
},
{
	"src":"assets/images/2.jpg",
	"altText":this.genericImgAltText,
	"title":"Rumpus",
	"medium":this.oil,
	"size":this.twentyFour_thirty,
	"status":this.available
},
{
	"src":"assets/images/1.jpg",
	"altText":this.genericImgAltText,
	"title":"Untitled",
	"medium":this.oil,
	"size":this.twentyFour_thirty,
	"status":this.available
}
];
  constructor() { }

  ngOnInit() {
  }

}
