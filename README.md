# isomorphic-react-demo


To try out the app:

```
$ git clone https://github.com/knowingrohan/isomorphic-react.git
$ cd isomorphic-react
$ npm install
$ npm start
```

Go to [http://localhost:3000](http://localhost:3000) to get the code up and running


## Project brief

This is a demo project to show you how to set up an isomorphic webapp using [React Router 4](https://github.com/ReactTraining/react-router) and [`react-router-config`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config).

The app has a few pages:

1. The Home page, which includes two sets of dynamic loading to server APIs to grab JSON data to be displayed on the page. This is achieved via isomorphic-fetch. One isomorphic-fetch returns the same JSON data every time and the other one returns a different JSON each time.
2. The About page

## Isomorphic Webapp Concepts

* **Initial Load**:  The HTML that server gets an initial request via a HTTP GET request. The server grabs what it needs to render the HTML, such as data from a database or static assets like images, then sends HTML to the browser.
* **SPA mode**: After initial load, the page should immediately enters Single Page Application (SPA) mode. In SPA mode:
	* The app can support quick navigation between pages without refreshing the page, and if done right, can even work offline.
	* Updates are initiated by events, such as mouse clicks or scroll from the user.
	* Additional data can by grabbed by talking to an API. The server serves up data, usually as JSON, to an api endpoint (RESTful API or GraphQL).

## Resources
Here are some repos and tutorials that helped me figure out how to set up the project:

* [technology-ebay-de/universal-react-router4](https://github.com/technology-ebay-de/universal-react-router4/tree/master/src/shared)
* [zacfukuda/universal-app-react-router](https://github.com/zacfukuda/universal-app-react-router)
* [React Router training on server rendering](https://reacttraining.com/react-router/web/guides/server-rendering)
* [isomorphic-dev-js](https://github.com/isomorphic-dev-js/complete-isomorphic-example)
* [EmileCantin's blog](https://blog.emilecantin.com/web/react/javascript/2017/05/16/ssr-react-router-4-webpack-code-split.html)
* Elyse Kolker Gordon's Slides: [SlideShare](https://www.slideshare.net/ElyseKolkerGordon/building-universal-web-apps-with-react-72715124) / [GoogleDoc](https://docs.google.com/presentation/d/1zxF2wvvOxctqqt78ho5D2lCKkU8R2X0wcY_O8TIbVGA/pub?start=false&loop=false&delayms=10000)
* [Going Isomorphic With React](https://bensmithett.github.io/going-isomorphic-with-react/#/) Presentation
