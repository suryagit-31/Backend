const asynhandler = (requsthandle) => {
  ;(req, res, next) => {
    Promise.resolve(requsthandle(req, res, next)).catch((err) => next(err))
  }
}

export default asynhandler;
/*const asynhandler = (func) => async (req,res,next) => {
  try {
    await func(req,res,next)
  } catch (error) {
    res.status(error || 400).json({
      sucess: false,
      message: error.message,
    })
  }
}
*/
