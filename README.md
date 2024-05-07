# BYU-OIT-Coding-Challenge

Hello, this is my submission for the coding challenge. I have a very basic website. Most of my time was spent trying to debug why my text input variable would not pass to the web request to the back end.

## Backend

I started on the backend first. I used express as the embedded server. I tried to add unit tests with chai and mocha but I was unsuccessful. I'll be studying up on how to add those to my testing framework.

```bash
cd webservice
node server.js
```

## To run the frontend

When I got the backend to the state I wanted I moved onto the front end. I spent the majority of my time learning about the Nuxt3 framework. As stated earlier I spent a considerable amount of time trying to figure out how to get a bound variable to be a query parameter in my web request. I ultimately was not able to do so. So in order to make different web requests than the default you will need to modify the query parameter found in the URL variable in webapp/pages/index.html.

```bash
cd webapp
npm run dev
```

## Improvements

The first improvement I would make is to add more color to my webpage. I would then select a font. Lastly I would make the UI reactive. For example, add a spinner when the user clicks the search button to show that a web request is happening in the background.

I would also add testing to both the front and back ends.