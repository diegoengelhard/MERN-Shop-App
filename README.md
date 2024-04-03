# MERN Shop App E-Commerce

This is a **dockerized** full stack application using React, Node.js, Express & MongoDB. Moreover, integrating styled components for the design of the applicatio. This application makes use of **redux** for cart & user session management. The platform is divided into three distinct parts: the __Admin dashboard__, the __Client interface__, and the __Api Service__.

#### Admin Features
- **Home Dashboard** Visualize e-commerce data using charts for better UX.
- **Product Management:** Add, edit, and delete products with ease.
- **User Administration:** Control user roles, determining who has administrative privileges.

#### Client Features
- **Shopping Experience:** Users can add products to their cart using __redux states__.
- **Order Placement:** Create orders, ensuring transaction flow.
- **Product Filtering:** Filter products by category.
- **Account Management:** View order history.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: 
```
git clone https://github.com/diegoengelhard/NextJS-Shop-App.git
```

2. For `shop-app-client` and `shop-app-api` make sure to copy the `.env.example` file to your own `.env` file.

3. Run docker compose to run the app:
```
docker-compose up
```

4. See the client result in http://localhost:5173 

5. See the admin result in http://localhost:5000