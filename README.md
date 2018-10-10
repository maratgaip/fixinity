#Fixinity

##Setup

* ```yarn install ``` or ``` npm install``` - To install all dependencies
* ```yarn start  ``` or ```  npm start``` - To start the project

##Deployment

* ```git push staging master``` - To deploy heroku staging server
* ```git push live master``` - To deploy heroku production server

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


## Local Deployment

local build change package.json.
```"start": "react-scripts start"```


before deployment change back to:
```"start": "node server"```

and build files
```yarn build```