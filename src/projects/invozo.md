---
title: Invozo
stack: Vue 3 & Firebase
slug: invozo
date: 2022-07-2200:00:00+00:00
thumb: ../images/thumbs/invozo.png
featuredImg: ../images/featured/invozo-banner.png
---

### Platform

    - Web

    - Tablet

<br />

### Project Description

This project is an invoice creator for individuals and businesses. Users are able to create an invoice, view current invoices, sort invoices by payment status, and edit and delete invoices. Future plans for this project include the ability to export invoices as PDFs and print, categories for invoices by service(s) provided, and to create accounts to manage invoices created and owned by the user.

### Project Link

This project is still in development, but you can view a live development version [**here**](https://main.d2xesme34d0p99.amplifyapp.com), while you can find the source code on my [**GitHub**](https://github.com/PaulBrasfield/invozo-invoice-app).

### Tech Stack

    - Vue 3.0.11

    - Firebase 8.10.0

    - AWS

This project is built with Vue 3 and Firebase. The single page application is constructed of main App component, with a separate component for the invoice creation modal and the invoice itself all injected within the App component. For the backend, I used Firebase to store invoice data. which I then referenced in my API calls to populate the Invoice list within the InvoiceView component to display the correct information for each current invoice within the database, as well as storing edited information and deleting certain invoices. This project was deployed on AWS Amplify, making use of Continuous Deployment by linking the GitHub repository to the app.
