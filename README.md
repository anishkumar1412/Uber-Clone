# API Documentation

## User Registration

### POST /users/register

Register a new user in the system.

#### Request Body

```json
{
    "fullname": {
        "firstname": "string", // required, minLength: 3
        "lastname": "string" // required, minLength: 3
    },
    "email": "string", // required, must be a valid email
    "password": "string" // required, minLength: 6
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
    "email": "string", // required, must be a valid email
    "password": "string" // required, minLength: 6
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

## User Profile

### GET /users/profile

Retrieve the authenticated user's profile.

#### Headers

- **Authorization**: Bearer token

#### Response

##### Success Response (200 OK)
```json
{
    "_id": "string",
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string"
}
```

##### Error Responses

- **401 Unauthorized**: Invalid or missing token
- **500 Internal Server Error**: Server error

## User Logout

### GET /users/logout

Logout the authenticated user.

#### Headers

- **Authorization**: Bearer token

#### Response

##### Success Response (200 OK)
```json
{
    "message": "Logged Out Successfully"
}
```

##### Error Responses

- **400 Bad Request**: No token provided
- **500 Internal Server Error**: Server error

## Captain Registration

### POST /captains/register

Register a new captain in the system.

#### Request Body

```json
{
    "fullname": {
        "firstname": "string", // required, minLength: 3
        "lastname": "string" // required, minLength: 3
    },
    "email": "string", // required, must be a valid email
    "password": "string", // required, minLength: 6
    "vehicle": {
        "color": "string", // required, minLength: 3
        "plate": "string", // required, minLength: 3
        "capacity": "number", // required, min: 1
        "vehicleType": "string" // required, enum: ['car', 'motorcycle', 'auto']
    }
}
```

#### Response

##### Success Response (201 Created)
```json
{
    "token": "string",
    "captain": {
        "_id": "string",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
    }
}
```

##### Error Responses

- **400 Bad Request**: Invalid input data
- **409 Conflict**: Email already exists
- **500 Internal Server Error**: Server error

## Captain Login

### POST /captains/login

Authenticate a captain and return a token.

#### Request Body

```json
{
    "email": "string", // required, must be a valid email
    "password": "string" // required, minLength: 6
}
```

#### Response

##### Success Response (200 OK)
```json
{
    "token": "string",
    "captain": {
        "_id": "string",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
    }
}
```

##### Error Responses

- **400 Bad Request**: Invalid input data
- **401 Unauthorized**: Invalid email or password
- **500 Internal Server Error**: Server error

## Captain Profile

### GET /captains/profile

Retrieve the authenticated captain's profile.

#### Headers

- **Authorization**: Bearer token

#### Response

##### Success Response (200 OK)
```json
{
    "_id": "string",
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
    }
}
```

##### Error Responses

- **401 Unauthorized**: Invalid or missing token
- **500 Internal Server Error**: Server error

## Captain Logout

### GET /captains/logout

Logout the authenticated captain.

#### Headers

- **Authorization**: Bearer token

#### Response

##### Success Response (200 OK)
```json
{
    "message": "Logged Out Successfully"
}
```

##### Error Responses

- **400 Bad Request**: No token provided
- **500 Internal Server Error**: Server error
