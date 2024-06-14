import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { increment } from '../state/counter/counter.actions';


@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent {

  phones=[
    {id:1, title:"iPhone",name:"iphone 15 pro max", price:6749, img:"/assets/images/iPhone15PM.jpg"},
    {id:2, title:"iPhone",name:"iPhone 14", price:2989, img:"/assets/images/iPhone14.jpg"},
    {id:3, title:"iPhone",name:"iPhone 13 pro max", price:2500, img:"/assets/images/i13.png"},
    {id:4, title:"iPhone",name:"iPhone 13 pro", price:2999, img:"/assets/images/i13pro.webp"}
   ]
  private store = inject(Store);
  id:any;
  items:any;
  constructor(private route:ActivatedRoute){}
  increment(){
    this.store.dispatch(increment())
    const Toast = Swal.mixin({

      toast: true,

      position: "top-end",

      showConfirmButton: false,

      timer: 3000,

      timerProgressBar: true,

      didOpen: (toast) => {

        toast.onmouseenter = Swal.stopTimer;

        toast.onmouseleave = Swal.resumeTimer;

      }

    });

    Toast.fire({

      icon: "success",

      title: "Added Successfully"

    });
  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.items = this.phones.find(e=>e.id == this.id)
     

  }

}
