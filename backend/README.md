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
