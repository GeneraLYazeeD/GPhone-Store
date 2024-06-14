import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  id=20;
  private store =inject(Store)
  constructor(){
   this.count$= this.store.select('counter')
  }
  count$?:Observable<Store>;
}
