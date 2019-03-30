# Express RESTful Starter

This is a starter kit for building RESTful APIs with ES6, Express framework and Passport

## Getting started

---------------

```sh
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
BASE_PATH: http://localhost:3000/api/

Authentication
    POST    /login
            Request:
                body:{
                    username: // for mock-data farhad.yasir
                    password: // for mock-data 123456
                }
            Response:
            {
                user: // a demo user info
            }
Users **You must be loggedIn before calling these apis**
    POST    /users
            Request:
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
            Response:
            {
                // returns offset and limit for now. You need to update code in
                // /models/handlers/user.model.handlers.js
                offset: url's offset,
                limit: url's limit,
            }
    GET     /users/:id
            Response:
            {
                // returns id for now. You need to update code in
                // /models/handlers/user.model.handlers.js
               id
            }
    DELETE  /users/:id
            Response:
            {
                // returns id for now. You need to update code in
                // /models/handlers/user.model.handlers.js
               id
            }
```

## Starter Kit Layout

---------------

```
+- config
|   +- env                    --> environment dependable configuration files
|     +- common.js            --> common configurations for all environment
|     +- development.js       --> configurations for development
|     +- production.js        --> configurations for production
|   +- index.js               --> configuration file where all configurations are concatenated
+- controllers                --> controller files
+- routes                     --> REST api routers
+- models                     --> models directories that communicate with the database
|   +- {Entity Name}          --> database access layer that connects with the db models
+- node_modules               --> development dependencies node modules
+- utilities                  --> utilities files
|   +- authentication         --> uses passport as authentication
|   +- constants              --> consists application constants
|   +- handlers               --> any kinds of handlers (e.g: errorHandler, responseHandler)
|   +- validators             --> customize express validators
+- server.js                  --> application run file
+- package.json               --> node package
```

## Licence

MIT licence
