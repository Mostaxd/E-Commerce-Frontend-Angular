# MyStore

A Full-Stack Web-store that is fully based on the Angular MVC Pattern.

View Live: http://mostaxd-ecommerce.s3-website.eu-central-1.amazonaws.com

The data is fetched from the spring-boot backend: https://github.com/Mostaxd/E-Commerce-Backend-Spring-Boot


_(Please Note: If the app receives no web traffic in a 30-minute period, it sleeps so it may take a couple of refreshes to get it back up and working)_


## Structure
The Model "Product" is responsible for representing data object.

The ProductService and CartService are responsible for handling the business logic.

The Components are mainly used for the View Layer.

## Functionality

- The store is able to fetch data and represent them.
- Ability to add items to cart and remove them.
- Show Total in cart
- Notifications System when adding/removing products
- Template-Driven Form-Validation for payment.

- In process: Payment system is being integrated...



## Instructions
Run `npm install --force` to install dependencies

Make sure you have TypeScript version between 4.8.2 and 4.9 `npm install typescript@4.8.2`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.


