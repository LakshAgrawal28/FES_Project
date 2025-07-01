# FES_Project
This is a repo for the submission of Project\Task done for FES society at NSUT.

# Notes API + JWT Auth

## Project Overview

This is a simple backend project where users can **register**, **log in**, **log out**, and **create their own notes**. JWT is used to keep user sessions secure. And notes are User-Specific as intended.

---

## Technologies Used

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT (for authentication)  
- bcrypt (for hashing passwords)  
- dotenv (for managing environment variables)

---

## 📚 API Routes Documentation

### 🔐 Auth Routes
| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and get JWT     |

### 📝 Notes Routes (Protected)
| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/notes`    | Get all user’s notes      |
| POST   | `/api/notes`    | Create a new note         |

**Note:** Add JWT token to protected routes in the headers like this:
Authorization: Bearer <your_token>


---

## Running Instructions

**Clone the project**
```bash
git clone https://github.com/LakshAgrawal28/FES_Project.git
cd jwt-notes-api
```
**Install dependencies**
```bash
npm install
```

**Create a .env file in the root folder**
```bash
npm run dev
```
Server will run at: http://localhost:8000

## Sample Postman Request flows

# Register
POST /api/auth/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "123456"
}
# Login
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "123456"
}
# Logout
POST /api/auth/logout
// No body required

# Create Note
POST /api/notes
Headers:
Authorization: Bearer <your_token>

Body:
{
  "title": "My First Note",
  "content": "This is a sample note."
}

# Get Notes
GET /api/notes
Headers:
Authorization: Bearer <token>


## .env file details

PORT=8000
MONGODB_URI=mongodb+srv://laksh:PASSWORD@laksh.0bbkpbb.mongodb.net
JWT_SECRET=your_jwt_secret_key
REFRESH_TOKEN_SECRET=your_refresh_token