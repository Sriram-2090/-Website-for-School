import pool from './database.js';

// Sample student data with realistic information
// Includes parents with multiple children
const sampleStudents = [
  // Parent 1 - Rajesh Kumar (2 children)
  {
    student_name: 'Aarav Kumar',
    parent_name: 'Rajesh Kumar',
    parent_email: 'rajesh.kumar@email.com',
    mobile_number: '9876543210',
    program: 'UKG (4.5 - 6 years)',
    fee_amount: 35000
  },
  {
    student_name: 'Diya Kumar',
    parent_name: 'Rajesh Kumar',
    parent_email: 'rajesh.kumar@email.com',
    mobile_number: '9876543210',
    program: 'LKG (3.5 - 4.5 years)',
    fee_amount: 32000
  },
  
  // Parent 2 - Priya Sharma (2 children)
  {
    student_name: 'Arjun Sharma',
    parent_name: 'Priya Sharma',
    parent_email: 'priya.sharma@email.com',
    mobile_number: '9876543211',
    program: 'Nursery (2.5 - 3.5 years)',
    fee_amount: 28000
  },
  {
    student_name: 'Ananya Sharma',
    parent_name: 'Priya Sharma',
    parent_email: 'priya.sharma@email.com',
    mobile_number: '9876543211',
    program: 'Playgroup (1.5 - 2.5 years)',
    fee_amount: 25000
  },
  
  // Parent 3 - Amit Patel (1 child)
  {
    student_name: 'Ishaan Patel',
    parent_name: 'Amit Patel',
    parent_email: 'amit.patel@email.com',
    mobile_number: '9876543212',
    program: 'UKG (4.5 - 6 years)',
    fee_amount: 35000
  },
  
  // Parent 4 - Sneha Reddy (1 child)
  {
    student_name: 'Saanvi Reddy',
    parent_name: 'Sneha Reddy',
    parent_email: 'sneha.reddy@email.com',
    mobile_number: '9876543213',
    program: 'LKG (3.5 - 4.5 years)',
    fee_amount: 32000
  },
  
  // Parent 5 - Vikram Singh (2 children)
  {
    student_name: 'Advika Singh',
    parent_name: 'Vikram Singh',
    parent_email: 'vikram.singh@email.com',
    mobile_number: '9876543214',
    program: 'Nursery (2.5 - 3.5 years)',
    fee_amount: 28000
  },
  {
    student_name: 'Vivaan Singh',
    parent_name: 'Vikram Singh',
    parent_email: 'vikram.singh@email.com',
    mobile_number: '9876543214',
    program: 'Playgroup (1.5 - 2.5 years)',
    fee_amount: 25000
  },
  
  // More single-child parents
  {
    student_name: 'Aadhya Mehta',
    parent_name: 'Neha Mehta',
    parent_email: 'neha.mehta@email.com',
    mobile_number: '9876543215',
    program: 'UKG (4.5 - 6 years)',
    fee_amount: 35000
  },
  {
    student_name: 'Reyansh Gupta',
    parent_name: 'Rohit Gupta',
    parent_email: 'rohit.gupta@email.com',
    mobile_number: '9876543216',
    program: 'LKG (3.5 - 4.5 years)',
    fee_amount: 32000
  },
  {
    student_name: 'Kiara Joshi',
    parent_name: 'Kavita Joshi',
    parent_email: 'kavita.joshi@email.com',
    mobile_number: '9876543217',
    program: 'Nursery (2.5 - 3.5 years)',
    fee_amount: 28000
  },
  {
    student_name: 'Vihaan Kapoor',
    parent_name: 'Manish Kapoor',
    parent_email: 'manish.kapoor@email.com',
    mobile_number: '9876543218',
    program: 'Playgroup (1.5 - 2.5 years)',
    fee_amount: 25000
  },
  {
    student_name: 'Anika Verma',
    parent_name: 'Anita Verma',
    parent_email: 'anita.verma@email.com',
    mobile_number: '9876543219',
    program: 'UKG (4.5 - 6 years)',
    fee_amount: 35000
  },
  {
    student_name: 'Aditya Malhotra',
    parent_name: 'Sanjay Malhotra',
    parent_email: 'sanjay.malhotra@email.com',
    mobile_number: '9876543220',
    program: 'LKG (3.5 - 4.5 years)',
    fee_amount: 32000
  },
  {
    student_name: 'Navya Iyer',
    parent_name: 'Lakshmi Iyer',
    parent_email: 'lakshmi.iyer@email.com',
    mobile_number: '9876543221',
    program: 'Nursery (2.5 - 3.5 years)',
    fee_amount: 28000
  },
  {
    student_name: 'Arnav Nair',
    parent_name: 'Ravi Nair',
    parent_email: 'ravi.nair@email.com',
    mobile_number: '9876543222',
    program: 'Playgroup (1.5 - 2.5 years)',
    fee_amount: 25000
  },
  {
    student_name: 'Myra Chopra',
    parent_name: 'Deepika Chopra',
    parent_email: 'deepika.chopra@email.com',
    mobile_number: '9876543223',
    program: 'UKG (4.5 - 6 years)',
    fee_amount: 35000
  },
  {
    student_name: 'Kabir Bhatt',
    parent_name: 'Vishal Bhatt',
    parent_email: 'vishal.bhatt@email.com',
    mobile_number: '9876543224',
    program: 'LKG (3.5 - 4.5 years)',
    fee_amount: 32000
  },
  {
    student_name: 'Sara Desai',
    parent_name: 'Pooja Desai',
    parent_email: 'pooja.desai@email.com',
    mobile_number: '9876543225',
    program: 'Nursery (2.5 - 3.5 years)',
    fee_amount: 28000
  },
  {
    student_name: 'Dhruv Agarwal',
    parent_name: 'Suresh Agarwal',
    parent_email: 'suresh.agarwal@email.com',
    mobile_number: '9876543226',
    program: 'Playgroup (1.5 - 2.5 years)',
    fee_amount: 25000
  }
];

// Insert sample data
const seedDatabase = async () => {
  console.log('🌱 Seeding database with sample student data...\n');
  
  try {
    // Clear existing data
    await pool.query('DELETE FROM students');
    console.log('✅ Cleared existing data');
    
    // Insert sample students
    const insertQuery = `
      INSERT INTO students (student_name, parent_name, parent_email, mobile_number, program, fee_amount)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    
    let inserted = 0;
    for (const student of sampleStudents) {
      await pool.query(insertQuery, [
        student.student_name,
        student.parent_name,
        student.parent_email,
        student.mobile_number,
        student.program,
        student.fee_amount
      ]);
      inserted++;
      console.log(`  ${inserted}. Added: ${student.student_name} (${student.program})`);
    }
    
    console.log(`\n✅ Successfully seeded ${inserted} students`);
    console.log('\n📊 Summary:');
    console.log(`   - Parents with 2 children: 3`);
    console.log(`   - Parents with 1 child: 15`);
    console.log(`   - Total students: ${inserted}`);
    console.log('\n💡 Test mobile numbers:');
    console.log('   - 9876543210 (Rajesh Kumar - 2 children)');
    console.log('   - 9876543211 (Priya Sharma - 2 children)');
    console.log('   - 9876543212 (Amit Patel - 1 child)');
    
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
  } finally {
    await pool.end();
    console.log('\n✅ Database connection closed');
    process.exit(0);
  }
};

seedDatabase();
