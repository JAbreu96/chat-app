# Chat App 🗣️

### Chat application service which allows users to chat with eachother.

## Tech: 💻
Typescript, Express, Node.js, Postgres, Sequelize, Socket.io


## Initialize:
To run the program in an IDE ensure that typescript is installed globally with:
>**npm install -g typescript**

Install dependencies:
>**npm install**

To initialize the server run:
>**npm start**

## ENDPOINTS:
>Assuming we are using localhost
### Conversation Endpoints:
#### Read:
Retrieves list of conversations along with their messages
>**GET** /convo/read
#### Create:
Writes a new conversation with another user into database
>**POST** /convo/new
### Message Endpoints:
#### Read:
Reads messages from database
>**GET** /messages/get
#### Create:
Writes new message to database
>**POST** /messages/post

### User Endpoints:
#### SignIn:
Authenticates user based credentials and allows them access
>**GET** /user/auth
#### Register:
Writes a new user to the database
>**POST** /user/register
