import { Component, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events';

  buyTickets(){
    Swal.fire({
      title: 'How many tickets will you like to purchase?',
      icon: 'question',
      input: 'range',
      inputLabel: 'Tickets',
      inputAttributes: {
        min: "1",
        max: "50",
        step: "1",
      },
      inputValue: 1,
      /* showCancelButton: true, */
      showConfirmButton: true,
      confirmButtonText: 'Checkout',
      confirmButtonColor: '#C92570',
    }).then((result) => {
      if (result.isConfirmed){
        Swal.fire(
          'Purchased!',
          'Thank you for shopping!',
          'success'

        )
      }
    }
    )
  }
}
