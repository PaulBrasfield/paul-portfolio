---
title: PCs2Go
stack: React & Commerce.js
slug: pcs2go
date: 2022-05-1400:00:00+00:00
thumb: ../images/thumbs/pcs2go.png
featuredImg: ../images/featured/pcs2go-banner.png
---

### Platform

    - Web

    - Mobile/Tablet

<br />

### Project Description

This project is an ecommerce store focused on selling pre-built gaming computers. Customers are able to browse items, add them to the cart, review their cart and make any changes (increase quantity, remove, etc.), and buy their items. Future plans for this project include the ability to create an account, search the item catalog, and view order history.

### Project Link

You can view the live project [**here**](https://main.d3bl1rsrij4z2s.amplifyapp.com/), while you can find the source code on my [**GitHub**](https://github.com/PaulBrasfield/pcs2go).

### Tech Stack

    - React 18.0.1

    - Chec/Commerce.js 2.8.0
	
	- Stripe 9.0.0

    - AWS

This project is built with React and Commerce.js. The single page application is constructed of an main App component, with separate components for the product catalog, shopping cart, and checkout page injected into the App component. For the backend, I made use of Chec/Commerce.js to build the storefront and hold information about products, such as their price and descriptions, which I referenced in my API calls to populate the Products component with items. Commerce.js was also used to hold and provide rates for both domestic and international shipping. Stripe was implemented to capture user payments, which only accept credit/debit cards at the moment. This project was deployed on AWS Amplify, making use of Continuous Deployment by linking the GitHub repository to the app.

