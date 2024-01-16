import mongoose from 'mongoose';

const connect = async () => {
  if (mongoose.connection.readyState) return;

  try {
    await mongoose.connect('mongodb://localhost:27017');
    console.log('Mongo connection seccessfully');
  } catch (error) {
    throw new Error('Error connection');
  }
};

export default connect;
