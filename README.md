Notepad backend is based  on mern stack project ,it is full stack CURD opration with a database (Using MongoDb)

To Install the all modules
run the command 
npm install

change the MonooDb string :
frist : Go to the mongo Db and create a new connection 
second : Copy the mongoDb string 
third: Paste on the place of MongoURi


The notepad is using 7 api and it is devided into two parts of routing 
1.User routes
2.Notes routes


lest use The api

1.User Credential..



For creating a new user (method -- POST)

API 1 --> http://localhost:5000/api/auth/singup

 header type (content type - application json)

 its need 3 parameter

 validation

 name : name should be at least 3 character
 email : email should be an email 
 password: password should be at lest 5 character



For logging a Exist User (Method POST)

API 2 -->http://localhost:5000/api/auth/login

 header type (content type - application json)

 its need 2 parameter

 validation

 email : email should be an email 
 password: password should be at lest 5
 



 For getting the user data (Method POST)

 API 3 --> http://localhost:5000/api/auth/getuser

importance!!
 header type (auth-token - authtoken)


 2. Notes 
 For fetching all notes of existing ethical user (Method -GET)

 API 4--> http://localhost:5000/api/notes/fetchallnotes

importance!!
 header type (auth-token - authtoke)
 heaader type (content type - apllication json)

 For Add a notes of existing ethical user (Method -POST)
 API --5--> http://localhost:5000/api/notes/addnote

importance!!
 header type (auth-token - authtoke)
 heaader type (content type - apllication json)

 parameter :
 1.title :-should not be blank
 2.description: should not be blank


 For Edit a notes of existing ethical user (Method -PUT)

API 6 -->http://localhost:5000/api/notes//updatenote/:id

importance!!
 header type (auth-token - authtoke)
 heaader type (content type - apllication json)

 track by id to edit a note which is comming from MongoDb data base 

 parameter :
 1.title :-should not be blank
 2.description: should not be blank

 For delete a notes of existing ethical user (Method -delete)

 API 7 --> http://localhost:5000/api/notes/deletenote/:id

 importance!!
 header type (auth-token - authtoke)
 heaader type (content type - apllication json)

delete  will be done by id 

Congratulation for mern Stack project
