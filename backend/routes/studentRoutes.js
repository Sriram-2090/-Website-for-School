import express from 'express';
import pool from '../database.js';

const router = express.Router();

// Lookup student(s) by mobile number
router.get('/lookup/:mobileNumber', async (req, res) => {
  const { mobileNumber } = req.params;
  
  // Validate mobile number format (10 digits)
  if (!/^\d{10}$/.test(mobileNumber)) {
    return res.status(400).json({ 
      error: 'Invalid mobile number format. Please enter 10 digits.' 
    });
  }
  
  try {
    const result = await pool.query(
      'SELECT * FROM students WHERE mobile_number = $1',
      [mobileNumber]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ 
        error: 'No student found with this mobile number.' 
      });
    }
    
    res.json({ 
      success: true, 
      count: result.rows.length,
      students: result.rows
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database error occurred' });
  }
});

// Get all students (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students ORDER BY student_name');
    res.json({ success: true, count: result.rows.length, students: result.rows });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database error occurred' });
  }
});

// Add new student
router.post('/', async (req, res) => {
  const { student_name, parent_name, parent_email, mobile_number, program, fee_amount } = req.body;
  
  // Validate required fields
  if (!student_name || !parent_name || !parent_email || !mobile_number || !program || !fee_amount) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // Validate mobile number
  if (!/^\d{10}$/.test(mobile_number)) {
    return res.status(400).json({ error: 'Invalid mobile number format' });
  }
  
  try {
    const result = await pool.query(
      `INSERT INTO students (student_name, parent_name, parent_email, mobile_number, program, fee_amount) 
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [student_name, parent_name, parent_email, mobile_number, program, fee_amount]
    );
    
    res.status(201).json({ 
      success: true, 
      message: 'Student added successfully',
      studentId: result.rows[0].id
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to add student' });
  }
});

// Update student
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { student_name, parent_name, parent_email, mobile_number, program, fee_amount } = req.body;
  
  try {
    await pool.query(
      `UPDATE students 
       SET student_name = $1, parent_name = $2, parent_email = $3, 
           mobile_number = $4, program = $5, fee_amount = $6
       WHERE id = $7`,
      [student_name, parent_name, parent_email, mobile_number, program, fee_amount, id]
    );
    
    res.json({ success: true, message: 'Student updated successfully' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to update student' });
  }
});

// Delete student
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    await pool.query('DELETE FROM students WHERE id = $1', [id]);
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

export default router;
