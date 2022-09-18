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
 ## 2.Product routes
------------------------------------------------------------------------ 
##  1.User routes
-------------------------------------------------------------------------
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

## API 2 : Get the user detail 
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
# Product Routs :- 
_____________________________________________________________
 ## API 4 - To create a new product  

 ```
 http://localhost:5000/api/product/createProduct
 ```
 `(method -- POST)`

 `header type (content type - application json)`

`Authorazation: authtoken`
## validation

 


`name  : name should be an name `

`quantity  : modelNo should be number `

`price  : price should be an number `

`modelNo  : modelNo  should be an number `

` EXAMPLE DATA `
```
{
  "name":"iPhone",
  "quantity":"2",
  "price":"1020",
  "modelNo":"101ll"
}
```
 ## API 5 - Get The All Product   

 ```
 http://localhost:5000/api/product/getproduct
 ```
 `(method -- GET)`

 `header type (content type - application json)`

`Authorazation: authtoken`
## validation

`No validation`

 Getting Responce
```
[
  {
    "_id": "6326e971ca033e21964e8b8b",
    "name": "iPhone",
    "quantity": 2,
    "price": 1020,
    "modelNo": "101ll",
    "__v": 0
  }
]
```
 ## API 6 - To Update  a Product   

 ```
 http://localhost:5000/api/product/updateproduct/:ID
 ```
 `(method -- PUT)`

 `header type (content type - application json)`

`Authorazation: authtoken`
## validation

`Update the existing Product detail `

 
```

  {
    "_id": "6326e971ca033e21964e8b8b",
    "name": "iPhone", 
    "quantity": 2,
    "price": 1020,
    "modelNo": "101ll",
    "__v": 0
  }

```
## API 7 - To Delete  a Product   

 ```
 http://localhost:5000/api/product/deleteproduct/:ID
 ```
 `(method -- Delete)`

 `header type (content type - application json)`

`Authorazation: authtoken`

`Getting response`
```
"the Product has been deleted"
```