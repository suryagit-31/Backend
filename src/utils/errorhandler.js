class ApiError extends Error {
  constructor(
    status,
    message = "some thing went wrong in server",
    errors = [],
    stack = ""
  ) {
    super(message)
    this.status= status
    this.message = message
    this.data = null
    this.errors = errors
    this.stack = stack
    this.success = false
  }
}

export default ApiError
