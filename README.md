# API Documentation

## User Registration

### POST /users/register

Register a new user in the system.

#### Request Body

```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

#### Response

##### Success Response (201 Created)
```json
{
    "token": "string",
    "user": {
        "_id": "string",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string"
    }
}
```

##### Error Responses

- **400 Bad Request**: Invalid input data
- **409 Conflict**: Email already exists
- **500 Internal Server Error**: Server error

## User Login

### POST /users/login

Authenticate a user and return a token.

#### Request Body

```json
{
    "email": "string",
    "password": "string"
}
```

#### Response

##### Success Response (200 OK)
```json
{
    "token": "string",
    "user": {
        "_id": "string",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string"
    }
}
```

##### Error Responses

- **400 Bad Request**: Invalid input data
- **401 Unauthorized**: Invalid email or password
- **500 Internal Server Error**: Server error
