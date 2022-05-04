---
title: Finstagram
stack: React & Firebase
slug: finstagram
date: 2022-05-0300:00:00+00:00
thumb: ../images/thumbs/finstagram.png
featuredImg: ../images/featured/finstagram-banner.png
---

### Platform

    - Web

    - Mobile/Tablet

<br />

### Project Description

This project is a clone of the social media site Instagram. Users are able to log in or sign up with an email address and password, upload images (only images, at the moment), add comments to other posts, and delete their own comments and posts. Future plans for this project include adding in the ability for users to like images, set their own profile picture, and send direct messages to other users.

### Project Link

You can view the live project [**here**](https://main.dilgl5julaohu.amplifyapp.com), while you can find the source code on my [**GitHub**](https://github.com/PaulBrasfield/finstagram).

### Tech Stack

    - React 17.0.1

    - Firebase

    - AWS

This project was built with React and Firebase. The single page application is constructed of a main Home component, with separate components for handling image uploading and post structure injected into the Home component. For the backend, I connected the application to Firebase. Firestore is used as the database to hold information about posts, such as the local image URL and comments, which I then referenced to for my API calls to populate the Home component with posts. Firebase Authentication was used to handle users information while Firebase Storage was used to hold the images uploaded by users. This project was deployed on AWS Amplify, making use of Continuous Deployment by linking the GitHub repository to the app.
