import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phoenix';

  constructor() { }


  scrollTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  closeNavbar() {
    // Close the navbar by toggling the collapse class
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.click();
    }
  }


  //   sendSMS() {
  //     const phoneNumber = '919119494140';
  //     const message = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`;
  //     const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

  //     window.location.href = smsUrl;
  //   }

  //   formData = {
  //     name: '',
  //     email: '',
  //     message: ''
  //   };

  //   submitForm() {
  //     const phoneNumber = '919119494140'; // Replace with your WhatsApp number with country code

  //     const message = `Hello, my name is ${this.formData.name}.
  // Email: ${this.formData.email}
  // Message: ${this.formData.message}`;

  //     const encodedMessage = encodeURIComponent(message);
  //     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  //     window.open(whatsappUrl, '_blank');
  //   }

}
