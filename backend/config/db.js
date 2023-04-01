import mongoose from "mongoose";

const connectDB = async () => {
  //this line below is to avoid deprecation warnings
  mongoose.set("strictQuery", false);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // these optons below are no longer needed in mongoose 6.0.0 and above
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
