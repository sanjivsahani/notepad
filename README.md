 # NOTEPAD 

  Notepad backend is based  on mern stack project ,it is full stack CURD opration with a database (Using MongoDb)

 ## To Install the all modules
 
``` bash
 npm install --save 
 yarn install
```

## Change MonoDb string :-

`
    #1 Go to the mongo Db and create a new connection 
`

`
  #2 : Copy the mongoDb string 
`

`
  #3: Paste on the place of MongoURI
`

 ## The notepad is using 7 api and it is devided into two parts of routing
-------------- 
##  1.User routes
 ## 2.Notes routes
------------------------------------------------------------------------ 

## API 1  :  For creating the user  
```
http://localhost:5000/api/auth/singup
```
`(method -- POST)`

 `header type (content type - application json)`

## Validation


` name : name should be at least 3 character`

` email : email should be an email `

` password: password should be at lest 5 character`

` EXAMPLE DATA `
```

"name:"sanjiv",
"email:"sanjv@gmail.com",
"password":"123456"

```

--------------

## API 2 : login for the user 
```
http://localhost:5000/api/auth/login
```
`(method -- POST)`

 `header type (content type - application json)`

## validation

 


` email : email should be an email `

` password: password should be at lest 5 character`

` EXAMPLE DATA `
```

 
"email:"sanjv@gmail.com",
"password":"123456"

```
 
-------------
 For getting the user data (Method POST)

 API 3 -->
``` 
http://localhost:5000/api/auth/getuser
````
`(method -- POST)`

`
importance!
 header type (auth-token - authtoken)`

 `header type (content type - application json)`

 ```
Authirization :  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```


 2. Notes 
 For fetching all notes of existing ethical user (Method -GET)
-------------------------------------------------------------------
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
