import { Component } from '@angular/core';

  

@Component({

  selector: 'app-stripe',

  templateUrl: './stripe.component.html',

  styleUrls: ['./stripe.component.css']

})

export class StripeComponent {

  paymentHandler: any = null;

  stripeAPIKey = 'pk_test_51LYlpzDy80XW6LItexqrVhaikfEyEBlsEOsTiUc8f71ZRXVQ6yJfUTOCjZZQbKUrrCdFBwtfTGoZS86OsWmNZZIT00kVB1uSwL';

  

  constructor() {}

  

  /*------------------------------------------

  --------------------------------------------

  ngOnInit() Function

  --------------------------------------------

  --------------------------------------------*/

  ngOnInit() {

    this.invokeStripe();

  }

  

  /*------------------------------------------

  --------------------------------------------

  makePayment() Function

  --------------------------------------------

  --------------------------------------------*/

  makePayment(amount: any) {

    const paymentHandler = (<any>window).StripeCheckout.configure({

      key: this.stripeAPIKey,

      locale: 'pl',

      token: function (stripeToken: any) {

        console.log(stripeToken);

        alert('Stripe token generated!');

      },

    });

    paymentHandler.open({

      name: 'ItSolutionStuff.com',

      description: '3 widgets',

      amount: amount * 100,

    });

  }

  

  /*------------------------------------------

  --------------------------------------------

  invokeStripe() Function

  --------------------------------------------

  --------------------------------------------*/

  invokeStripe() {

    if (!window.document.getElementById('stripe-script')) {

      const script = window.document.createElement('script');

  

      script.id = 'stripe-script';

      script.type = 'text/javascript';

      script.src = 'https://checkout.stripe.com/checkout.js';

      script.onload = () => {

        this.paymentHandler = (<any>window).StripeCheckout.configure({

          key: this.stripeAPIKey,

          locale: 'auto',

          token: function (stripeToken: any) {

            console.log(stripeToken);

            alert('Payment has been successfull!');

          },

        });

      };

  

      window.document.body.appendChild(script);

    }

  }

}