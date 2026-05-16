# School Management API

A production-ready REST API built using Node.js, Express.js, and MySQL for managing school data.  
The system allows users to add schools and retrieve schools sorted by proximity to a user’s location using geographical distance calculation.

---

# Live API

Base URL:

```bash
https://school-management-api-7fwn.onrender.com
```

---

# Features

- Add new schools
- Input validation
- MySQL database integration
- Distance-based school sorting
- RESTful APIs
- Railway cloud MySQL
- Render deployment
- Postman API testing

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Railway
- Render
- express-validator
- mysql2
- dotenv
- cors

---

# Project Structure

```bash
school-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── middleware/
│   └── errorHandler.js
│
├── routes/
│   └── schoolRoutes.js
│
├── utils/
│   └── distance.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Sukumar5705/school-management-api.git
```

## Navigate to Project

```bash
cd school-management-api
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create `.env` file in root directory.

Example:

```env
PORT=5000

DB_HOST=YOUR_HOST
DB_PORT=YOUR_PORT
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DATABASE
```

---

# Database Setup

Run this SQL query:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# API Endpoints

# 1. Add School

## Endpoint

```bash
POST /addSchool
```

## Request Body

```json
{
  "name": "Delhi Public School",
  "address": "New Delhi",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

## Example URL

```bash
https://school-management-api-7fwn.onrender.com/addSchool
```

## Success Response

```json
{
  "message": "School added successfully"
}
```

---

# 2. List Schools

## Endpoint

```bash
GET /listSchools
```

## Query Parameters

| Parameter | Type | Required |
|----------|------|----------|
| latitude | float | Yes |
| longitude | float | Yes |

## Example URL

```bash
https://school-management-api-7fwn.onrender.com/listSchools?latitude=17.3850&longitude=78.4867
```

## Success Response

```json
[
  {
    "id": 1,
    "name": "DAV Public School",
    "address": "Hyderabad",
    "latitude": 17.385,
    "longitude": 78.4867,
    "distance": "0.00 KM"
  }
]
```

---

# Distance Calculation

The API uses the Haversine Formula to calculate geographical distance between the user and schools.

---

# Deployment

## Backend Hosting
- Render

## Database Hosting
- Railway MySQL

---

# Postman Collection

Postman collection contains:
- Add School API
- List Schools API
- Example requests
- Example responses

---

# Validation

The project validates:
- Name is required
- Address is required
- Latitude must be float
- Longitude must be float

---

# Error Handling

Structured error handling implemented for:
- Validation errors
- Database errors
- Missing query parameters
- Internal server errors

---

# Author

Sukumar Erugadindla

---

# Submission Deliverables

- GitHub Repository
- Live Hosted APIs
- Postman Collection
- Source Code ZIP
