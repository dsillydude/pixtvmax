// migrate.js
const mongoose = require('mongoose');
require('dotenv').config();

// Make sure this URI matches the one in your server.js
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://mackdsilly:Ourfam%402019@cluster0.lj9wanf.mongodb.net/YourDatabaseName?retryWrites=true&w=majority&appName=Cluster0';

async function runMigration() {
  console.log('▶️  Starting migration process for PixTv Max...');
  
  try {
    // 1. Connect to the database
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB for migration.');

    const db = mongoose.connection.db;
    const collections = await db.listCollections({ name: 'users' }).toArray();
    
    if (collections.length === 0) {
      console.log('🟡  Users collection does not exist. No migration needed.');
      return;
    }

    // 2. Try to drop the old index
    try {
      console.log('⏳ Attempting to drop the unique index on "deviceId"...');
      await db.collection('users').dropIndex('deviceId_1');
      console.log('✅ Successfully dropped the old unique index: "deviceId_1"');
    } catch (error) {
      if (error.codeName === 'IndexNotFound') {
        console.log('🟡  Index "deviceId_1" was not found. It was likely already removed. Skipping.');
      } else {
        throw error;
      }
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    // 3. Disconnect from the database
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB.');
    console.log('🏁 Migration process finished.');
  }
}

// Run the migration
runMigration();