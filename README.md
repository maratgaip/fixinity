#Fixinity

##Setup

* ```yarn install ``` or ``` npm install``` - To install all dependencies
* ```yarn start  ``` or ```  npm start``` - To start the project


* ```yarn watch-css  ``` or ```  npm watch-css``` - To build/watch scss files into css

##Structure

``````
├── src                                 - All source files
│   ├── App.css                         - Main css file
│   ├── App.js                          - Main File (Routing is here)
│   ├── App.test.js
│   ├── components                      - All Components
│   │   ├── Device
│   │   │   ├── assets                  - Assets for component
│   │   │   ├── index.jsx               - React Class
│   │   │   ├── style.css               - Auto generated CSS file
│   │   │   └── style.scss              - SASS File
│   │   ├── Header
│   │   ├── Landing
│   │   ├── Repair
│   ├── index.css
│   ├── index.js
│   ├── redux
│   │   ├── reducer                     - Reducer (Data from API)
│   │   └── saga                        - Saga (Api calls)


``````

asdad