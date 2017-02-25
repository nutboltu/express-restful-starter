# Express RESTful Starter

This is a starter kit for building RESTful APIs with ES6 and Express framework

Getting started
---------------

```
# Clone the repository
git clone git@github.com:nutboltu/express-restful-starter.git
cd express-restful-starter

# Remove this git config
rm -rf .git 

# Install dependencies
npm i

# Start server in development environment
npm start

# Start server in production environment
npm start:prod
```

The api service runs on port 3000. We implemented following apis in this starter kit

```
BASE_PATH: http://localhost:3000/api/1.0/

Authentication
    POST    /authenticate
            Request:
                body:{
                    payload: your payload for access token
                }
            Response:
            {
                token: your access token
            }
Users
    POST    /users
            Request:
                header: {
                Authorization: token you received from /authenticate api
                }
                body:{
                    firstName: user's first name,
                    lastName: user's last name,
                    email: user's email,
                    password: user's password,
                }
            Response:
            {
                // returns same body for now. You need to update code in
                // /models/handlers/user.model.handlers.js
                firstName: user's first name,
                lastName: user's last name,
                email: user's email,
                password: user's password,
            }
    PUT     /users/:id
            Request:
               header: {
                Authorization: token you received from /authenticate api
               }
            Response:
            {
                // returns same body for now. You need to update code in
                // /models/handlers/user.model.handlers.js
                firstName: user's first name,
                lastName: user's last name,
                email: user's email,
                password: user's password,
            }
    GET     /users/:offset/:limit
            Request:
               header: {
                Authorization: token you received from /authenticate api
               }
            Response:
            {
                // returns offset and limit for now. You need to update code in
                // /models/handlers/user.model.handlers.js
                offset: url's offset,
                limit: url's limit,
            }
    GET     /users/:id
            Request:
               header: {
                Authorization: token you received from /authenticate api
               }
            Response:
            {
                // returns id for now. You need to update code in
                // /models/handlers/user.model.handlers.js
               id
            }
    DELETE  /users/:id
            Request:
               header: {
                Authorization: token you received from /authenticate api
               }
            Response:
            {
                // returns id for now. You need to update code in
                // /models/handlers/user.model.handlers.js
               id
            }
```

Starter kit layout
------------------

```
+- config
|   +- env                    --> environment dependable configuration files
|     +- common.js            --> common configurations for all environment
|     +- development.js       --> configurations for development
|      +- production.js       --> configurations for production    
|   +- index.js               --> configuration file where all configurations are concatenated
+- controllers                --> controller files
+- middlewares                --> consists all middlewares (e.g: routes, validator)
|   +- routes                 --> REST api routers
|   +- validators             --> customize express validators  
+- models                     --> models directories that communicate with the database
|   +- handlers               --> database access layer that connects with the db models
|   +- db.connection.js       --> connect with mongodb
+- node_modules               --> development dependencies node modules
+- routes                     --> REST api routers
+- utilities                  --> utilities files
+- server.js                  --> application run file
+- package.json               --> node package configuration file
```



## Licence
MIT licence
