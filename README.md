# friday-app

A simple web app that allows a user to select their car from a directory of registered cars.The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

## Setup Instructions

**Note**  
Kindly ensure the machine to be used in launching this project  has NodeJS >= v14.6 and npm 8.1.0 already installed.

**Stack Requirements**  
```
1. NodeJS 14.6 or >= and npm 8.1.0
2. Yarn
3.React 16.x
4. NextJS v12.x
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
 - ![mobile_viewport](https://user-images.githubusercontent.com/1788922/144515056-35060b4e-7336-4354-811f-36dc6c6f175a.png)

 - The CSS was created with basic css media queries as required
 - Web app was tested across Chrome, IE and Moxilla Firefox
 - A react package manager called **'react-select'** was used to create the selcet UI due its feature rich capabilities and rendering
 - ![main_result](https://user-images.githubusercontent.com/1788922/144515197-7a373547-bef8-4995-962d-7013a7c95782.png)

 - Jest was used as our testing framework

# 2: Development Approach and Strategy

 - NextJs was choosen as the React Framework because it provides the best developer experience with all the features needed for  production environment. Things susch as hybrid     static & server rendering, TypeScript support, smart bundling, route pre-fetching, and no extra configuration needed.
 - **http-proxy-middleware **   is used to implement a proxy for api calls between the Next app and the Nodejs backend which has an api route.
 - ![1_bILDQkDQDc74WdmvrZUWXA](https://user-images.githubusercontent.com/1788922/144514994-1e070418-3b6a-45d4-baaf-24b085d3d274.png)

 - Futher more components/layout.jsx was implemented to render the layout for our page.
 - Re-useablecomponents such as - **pagination.jsx, makeDropDown.jsx and VehicleSearchResults.jsx** were implemented to conform to the **DRY** principle
 - ![bottom_result](https://user-images.githubusercontent.com/1788922/144515094-766c526f-d878-4b60-b3f1-0120f6e22bad.png)

 - To maintain Modularity, the services folder contains a CarSservice.js file that contains all the functions used to make api calls to handle data fetching.
 - Jest i sused our Unit tests and to make assertions on our code. The @testing-library libraries allow us to render and test our React application.babel-jest is used to   transform our code with babel.
 - ![test_results](https://user-images.githubusercontent.com/1788922/144514936-d7ba4f8f-bf02-4e2f-882f-187592b4a699.png)

