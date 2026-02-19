# Quick Start Guide

## Starting the Servers

### Backend Server

```bash
cd C:\Users\SRIRAM\Documents\School\backend
npm start
```

Server will run on: http://localhost:5000

### Frontend Server

```bash
cd C:\Users\SRIRAM\Documents\School
npm run dev
```

App will run on: http://localhost:5173

## Testing the System

1. **Open** http://localhost:5173 in your browser
2. **Scroll down** to the "Pay Tuition Fees Online" section
3. **Test with these mobile numbers:**

### Try Single Child

- Enter: `9876543212`
- Result: Auto-fills Ishaan Patel's details directly

### Try Multiple Children

- Enter: `9876543210`
- Result: Shows 2 children (Aarav & Diya Kumar) to select from

### Try Not Found

- Enter: `9999999999`
- Result: Allows manual entry of details

## Sample Test Mobile Numbers

| Mobile     | Parent       | Children   | Fee               |
| ---------- | ------------ | ---------- | ----------------- |
| 9876543210 | Rajesh Kumar | 2 children | ₹35,000 & ₹32,000 |
| 9876543211 | Priya Sharma | 2 children | ₹28,000 & ₹25,000 |
| 9876543212 | Amit Patel   | 1 child    | ₹35,000           |
| 9876543213 | Sneha Reddy  | 1 child    | ₹32,000           |
| 9876543214 | Vikram Singh | 2 children | ₹28,000 & ₹25,000 |

See [walkthrough.md](file:///C:/Users/SRIRAM/.gemini/antigravity/brain/c6c705e2-f430-443c-b867-033555f1e46f/walkthrough.md) for complete documentation.
