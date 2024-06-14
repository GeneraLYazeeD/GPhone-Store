import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {

  phones=[
   {id:1, title:"iPhone",name:"iphone 15 pro max", price:6749, img:"/assets/images/iPhone15PM.jpg"},
   {id:2, title:"iPhone",name:"iPhone 14", price:2989, img:"/assets/images/iPhone14.jpg"},
   {id:3, title:"iPhone",name:"iPhone 13 pro max", price:2500, img:"/assets/images/i13.png"},
   {id:4, title:"iPhone",name:"iPhone 13 pro", price:2999, img:"/assets/images/i13pro.webp"}
  ]

}
