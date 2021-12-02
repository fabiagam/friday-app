# friday-app

A simple web app that allows a user to select their car from a directory of registered cars.The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

## Setup Instructions

**Note**  
Kindly ensure the machine to be used in launching this project  has NodeJS >= v14.6 and npm 8.1.0 already installed.

**Stack Requirements**  
```
1. NodeJs 14.6 or >= and npm 8.1.0
2. Sqlite
```

**How to run this app**  
### 1) Clone the repository and install dependencies

``` 
//on local
git clone https://github.com/fabiagam/friday-app
cd friday-app
npm install
```
**To launch the app**  
### 1) In development environment
```
// the apiserver/apiserver.js that was shared from Gitlab 
node api/server.js
```
### 2) Then run the next.js client app
```
npm run dev
```

# 1: Requirements and Considerations

 - The web app was developed with a Mobile-first strategy to ensure the app works well on mobile viewport
 - The CSS was created with basic css media queries as required
 - Web app was tested across Chrome, IE and Moxilla Firefox
 - A react package manager called **'react-select'** was used to create the selcet UI due its feature rich capabilities and rendering
 - Jest was used as our testing framework

# 2: Development Approach and Strategy

 - NextJs was choosen as the React Framework because it provides the best developer experience with all the features needed for  production environment. Things susch as hybrid     static & server rendering, TypeScript support, smart bundling, route pre-fetching, and no extra configuration needed.
 - **http-proxy-middleware **   is used to implement a proxy for api calls between the Next app and the Nodejs backend which has an api route.
 - Futher more components/layout.jsx wasimplemented to render the layout for our page.
 - Re-useablecomponents such as - **pagination.jsx, makeDropDown.jsx and VehicleSearchResults.jsx** were implemented to conform to the **DRY** principle
 - To maintain Modularity, the services folder contains a CarSservice.js file that containasall the functions used tomake api calls to handle data fetching.
 - Jest i sused our Unit tests and to make assertions on our code. The @testing-library libraries allow us to render and test our React application.babel-jest is used to   transform our code with babel.
