# LAB - 38

## Remote-API

### Author: Liz Kavalski

### Links and Resources
* [submission PR](https://github.com/lizkavalski/lab-38/pull/2)
* [back-end](https://api-js401.herokuapp.com/api/v1/todo/schema') (class-backend)

### Modules
#### `todo.js`
Renders the the form and the list
#### `form.js`
Renders a form for the user to fill. Also sends the data to the server 
#### `list.js`
Render the list from the server
#### `./store/index.js`
The entery point for the store
#### `todo.store.js`
Contains the `actions` and the `reducer`. Based on the action that is given the reducer will change the current state.

### Setup
#### `.env` requirements
REACT_APP_API= a link to the backend
REACT_APP_SECRET= make up your own
REACT_APP_Q_SERVER= a link to the q server

#### Running the app
* `npm start`
* login in by typeing editor/EDITOR

  
#### Tests
No tests
