// API utility for student lookup
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Lookup student(s) by mobile number
 * @param {string} mobileNumber - 10-digit mobile number
 * @returns {Promise<{success: boolean, count: number, students: Array}>}
 */
export const lookupStudentByMobile = async (mobileNumber) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/lookup/${mobileNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to lookup student');
    }

    return data;
  } catch (error) {
    console.error('Error looking up student:', error);
    throw error;
  }
};

/**
 * Get all students (admin)
 * @returns {Promise<{success: boolean, count: number, students: Array}>}
 */
export const getAllStudents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch students');
    }

    return data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

/**
 * Add new student
 * @param {Object} studentData - Student information
 * @returns {Promise<{success: boolean, message: string, studentId: number}>}
 */
export const addStudent = async (studentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to add student');
    }

    return data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};
