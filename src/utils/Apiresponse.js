class Apiresponse {
  constructor(status, message = "success", data) {
    this.status = status
    this.message = message
    this.data = data
    tjhis.success =status<400
  }
}

export  default Apiresponse;