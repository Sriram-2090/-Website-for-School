# School Fee Payment Backend API

Backend API server for the school fee payment system with student lookup functionality.

## Features

- 🔍 Student lookup by mobile number
- 👨‍👩‍👧‍👦 Support for multiple children per parent
- 💾 SQLite database (perfect for ~100 students)
- 🚀 Fast and reliable
- 🔒 Input validation and error handling

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Seed Database with Sample Data

```bash
npm run seed
```

This will create a database with 20 sample students, including parents with multiple children.

### 3. Start Server

```bash
npm start
```

Server runs on: `http://localhost:5000`

For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

### Student Lookup

**GET** `/api/students/lookup/:mobileNumber`

Lookup student(s) by mobile number (10 digits).

**Response (Single child):**

```json
{
  "success": true,
  "count": 1,
  "students": [
    {
      "id": 1,
      "student_name": "Ishaan Patel",
      "parent_name": "Amit Patel",
      "parent_email": "amit.patel@email.com",
      "mobile_number": "9876543212",
      "program": "UKG (4.5 - 6 years)",
      "fee_amount": 35000
    }
  ]
}
```

**Response (Multiple children):**

```json
{
  "success": true,
  "count": 2,
  "students": [
    {
      "id": 1,
      "student_name": "Aarav Kumar",
      "parent_name": "Rajesh Kumar",
      "parent_email": "rajesh.kumar@email.com",
      "mobile_number": "9876543210",
      "program": "UKG (4.5 - 6 years)",
      "fee_amount": 35000
    },
    {
      "id": 2,
      "student_name": "Diya Kumar",
      "parent_name": "Rajesh Kumar",
      "parent_email": "rajesh.kumar@email.com",
      "mobile_number": "9876543210",
      "program": "LKG (3.5 - 4.5 years)",
      "fee_amount": 32000
    }
  ]
}
```

### Get All Students

**GET** `/api/students`

Returns all students in the database.

### Add Student

**POST** `/api/students`

**Body:**

```json
{
  "student_name": "Student Name",
  "parent_name": "Parent Name",
  "parent_email": "email@example.com",
  "mobile_number": "9876543210",
  "program": "UKG (4.5 - 6 years)",
  "fee_amount": 35000
}
```

### Update Student

**PUT** `/api/students/:id`

### Delete Student

**DELETE** `/api/students/:id`

### Health Check

**GET** `/api/health`

## Test Mobile Numbers

Use these mobile numbers to test the lookup:

- **9876543210** - Rajesh Kumar (2 children: Aarav & Diya)
- **9876543211** - Priya Sharma (2 children: Arjun & Ananya)
- **9876543212** - Amit Patel (1 child: Ishaan)
- **9876543213** - Sneha Reddy (1 child: Saanvi)
- **9876543214** - Vikram Singh (2 children: Advika & Vivaan)

## Database

- **File:** `school.db` (created automatically)
- **Table:** `students`
- **Location:** Backend directory

## Environment Variables

Create `.env` file (already included):

```
PORT=5000
DB_PATH=./school.db
CORS_ORIGIN=http://localhost:5173
```

## Adding Real Student Data

Replace sample data by:

1. Directly editing the database using SQLite tools
2. Using the POST endpoint to add students
3. Modifying `seedData.js` with your data and running `npm run seed`
