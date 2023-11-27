import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    // console.log('MongoDB URI:', config.database_url); // Add this line for debugging
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
