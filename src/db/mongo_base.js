import mongoose from "mongoose"
import { Db_name } from "../constants.js"
import express from "express"

async function connect_DB() {
  try {
    const connection_instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${Db_name}`
    )
    console.log(`server is ruuning at port ${process.env.PORT}`)
    console.log(
      `Mongo DB connected at DB_HOST : ${connection_instance.connection.host}`
    )
  } catch (error) {
    console.log("The mongo_DB CONNECTION ERROR", error)
    process.exit(1)
  }
}

export default connect_DB;
