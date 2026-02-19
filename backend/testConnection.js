import pool from './database.js';

// Test PostgreSQL connection
const testConnection = async () => {
  console.log('🔍 Testing PostgreSQL connection...\n');
  
  try {
    console.log('Connection settings:');
    console.log(`  Host: ${process.env.DB_HOST || 'localhost'}`);
    console.log(`  Port: ${process.env.DB_PORT || 5432}`);
    console.log(`  Database: ${process.env.DB_NAME || 'school_db'}`);
    console.log(`  User: ${process.env.DB_USER || 'postgres'}`);
    console.log('');
    
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Successfully connected to PostgreSQL!');
    console.log(`   Server time: ${result.rows[0].now}\n`);
    
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error('❌ Connection failed!');
    console.error(`   Error: ${err.message}\n`);
    
    console.log('💡 Troubleshooting tips:');
    console.log('   1. Make sure PostgreSQL is installed');
    console.log('   2. Check if PostgreSQL service is running');
    console.log('   3. Verify database "school_db" exists');
    console.log('   4. Check credentials in .env file');
    console.log('   5. Make sure DB_PASSWORD matches your PostgreSQL password\n');
    
    await pool.end();
    process.exit(1);
  }
};

testConnection();
