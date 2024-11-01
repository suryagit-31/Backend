import mongoose from "mongoose"
import { Db_name } from "./constants.js"
import connect_DB from "./db/mongo_base.js"
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config({
  path: "./env",
})

app.on("error", (error) => {
  console.log("ERRR:", error)
  throw error
})

connect_DB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("ERRR: connction failed for data base", err)
    throw err
  })

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
