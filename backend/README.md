# API Documentation

## User Registration Endpoint

### POST /users/register

Register a new user in the system.

#### Request Body

```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string",
  "password": "string"
}
```

#### Validation Rules

- Email must be a valid email address
- Password must be at least 6 characters long
- First name is required

#### Response

**Success Response (201 Created)**

```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

**Error Response (400 Bad Request)**

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Status Codes

- `201`: Successfully created user
- `400`: Validation error or missing required fields

#### Example Responses

**Success Example**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "_id": "64c9e4f7c1234567890abcde",
    "createdAt": "2025-07-21T10:30:45.123Z",
    "updatedAt": "2025-07-21T10:30:45.123Z"
  }
}
```

**Validation Error Example**

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body",
      "value": "invalid-email"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Missing Fields Error Example**

```json
{
  "errors": [
    {
      "msg": "First name is required",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

---

## User Login Endpoint

### POST /users/login

Authenticate a user and receive a JWT token.

#### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

#### Validation Rules

- Email must be a valid email address
- Password is required

#### Response

**Success Response (200 OK)**

```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

**Error Response (400 Bad Request or 401 Unauthorized)**

```json
{
  "message": "Invalid Credentials"
}
```

**Validation Error Example (400 Bad Request)**

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body",
      "value": "invalid-email"
    }
  ]
}
```

#### Status Codes

- `200`: Successfully authenticated
- `400`: Validation error or missing required fields
- `401`: Invalid credentials

#### Example Responses

**Success Example**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "_id": "64c9e4f7c1234567890abcde"
  }
}
```

**Invalid Credentials Example**

```json
{
  "message": "Invalid
```

---

## User Profile Endpoint

### GET /users/profile

Retrieve the authenticated user's profile information.

#### Authentication

- Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

#### Response

**Success Response (200 OK)**

```json
{
  "_id": "64c9e4f7c1234567890abcde",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com"
  // ...other user fields
}
```

**Error Response (401 Unauthorized)**

```json
{
  "message": "Unauthorized"
}
```

#### Status Codes

- `200`: Successfully retrieved user profile
- `401`: Unauthorized or invalid/missing token

---

## User Logout Endpoint

### GET /users/logout

Logs out the authenticated user by blacklisting their JWT token.

#### Authentication

- Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

#### Response

**Success Response (200 OK)**

```json
{
  "message": "Logout Successfully"
}
```

**Error Response (401 Unauthorized)**

```json
{
  "message": "Unauthorized"
}
```

#### Status Codes

- `200`: Successfully logged out and token blacklisted
- `401`: Unauthorized or invalid/missing
