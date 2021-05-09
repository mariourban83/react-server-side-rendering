# Rendering React on the Server
## Content

[Introduction to SSR](#introduction-to-ssr)   
[Benefits of using SSR](#benefits-of-using-ssr)   
[Project with SSR](#project-with-ssr)   
[Adding data source](#adding-data-source)   
[Adding Redux](#adding-redux)   
[Create initial Express or Next server](#create-initial-express-or-next-server)   

---

### Introduction to SSR

Isomorphic, Universal or Server side rendering are the same things. These terms refer to rendering the application on the server side instead of the client side.   
![ssr](/ssr.png)

The application is rendered on the server an the files, sent to the client need only be displayed. On older pcs, or phones that means faster load.

---

### Benefits of using SSR

- Faster loading time on the client side with minimized network latency
- SEO friendly (for better search engines visibility )
- Improved data security and PIPA compliance
    - Even if large amount of data are pulled from database, the information itself remains on the back end and never gets delivered to the client.
- Predictable server-side processing performance, accurate user metrics and fewer browser compatibility issues

---

## Project with SSR

Requirements:   
- Chrome Dev Tools
- Node JS
- React JS with dependencies
- Next JS (webpack)
- Redux


Steps:   
Create Next JS app with either 
```
npx create-next-app filename
```
or manualy with :
```
mkdir ssr
cd ssr
npm init
npm install react react-dom next
```

Now with react and next installed, start creating the pages for the app.
```
project/
    pages/
        index.js
    public/

```
All the files/pages inside **/pages** folder will be rendered on the server. Also, all the static files like images, css or js files should be placed inside **/public** folder.   
After creating simple component inside **index.js**, first build and then run the app
```
yarn run build
yarn run start
```
 At this point, the base app is running on the server on localhost:3000. The beauty of next-js is that it does all the hard work for me.

### Adding data source

Data can be added to the app directly via the component as a props, fetched from the API/json file or even from external resources. In this case we will add **data.json** from the API folder
```
project/
    pages/
        index.js
        API/
            data.json
    public/
```
To use data from API, we have to convert the stateless function to class component.

---
## Adding Redux
Redux is a predictable state container for JavaScript apps.   
When working with state management, it is offten way to go when working with React.   
First start installing dependencies:
```
yarn add next-redux-wrapper react-redux redux
```
Next, create **store.js** in the project root level to initialize the store. Then, create the actions ( that are called from the frontend or the component via function dispatch() and passed down to the reducer ).   
Example:
```
$./store.js

// Actions
export const initialCards = () => {
    // initial state - data from data.json
    return {
        type: 'INITIALCARDS',
        cards: data
    }
};

export const addItem = (item) => {
    return {
        type: 'ADD',
        item
    }
};
```
The last step to complete redux setup is to add reducers.   
Example:
```
$./store.js

// reducers
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards,
            }
        case 'ADD':
            return {
                ...state,
                cards: [...state.cards, action.item],
            }
        default: return state
    }
};
```
Thats all for basic Redux implementation with React.   
[Redux API Reference](https://redux.js.org/api/api-reference)   

---

