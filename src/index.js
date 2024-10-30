import mongoose from "mongoose"
import { Db_name } from "./constants.js"

import express from "express"
import connect_DB from "./db/mongo_base.js"
import dotenv from "dotenv"

dotenv.config({
  path: "./env",
})

connect_DB()

/*
const app = express()
  ;(async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`)
      console.log("Database connected")
      app.on("error is", (error) => {
        console.log("ERRR:", error)
        throw error
      })

      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
      })

    } catch (error) {
      console.log(error)
      throw error
    }
  })()

*/
