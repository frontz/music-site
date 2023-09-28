import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css'],
})
export class StripePaymentComponent {
  paymentHandler: any = null;
  constructor() {}
  ngOnInit() {
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LYlpzDy80XW6LItexqrVhaikfEyEBlsEOsTiUc8f71ZRXVQ6yJfUTOCjZZQbKUrrCdFBwtfTGoZS86OsWmNZZIT00kVB1uSwL',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Your credit cart data',
      description: 'Payment for your order',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LYlpzDy80XW6LItexqrVhaikfEyEBlsEOsTiUc8f71ZRXVQ6yJfUTOCjZZQbKUrrCdFBwtfTGoZS86OsWmNZZIT00kVB1uSwL',
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