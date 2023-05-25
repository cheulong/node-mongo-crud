import { ERROR_CODE } from "../constant.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : ERROR_CODE.SERVER_ERROR;
  const ERROR_TITLE = {
    [ERROR_CODE.VALIDATION_ERROR]: "Validation Failed",
    [ERROR_CODE.NOT_FOUND]: "Not Found",
    [ERROR_CODE.UNAUTHORIZED]: "Unauthorized",
    [ERROR_CODE.FORBIDDEN]: "Forbidden",
    [ERROR_CODE.SERVER_ERROR]: "Server error",
  };
  switch (statusCode) {
    case ERROR_CODE.VALIDATION_ERROR:
      res.json({
        title: ERROR_TITLE[ERROR_CODE.VALIDATION_ERROR],
        message: err.message,
        stackTrace: err.stack,
      });

      break;
    case ERROR_CODE.NOT_FOUND:
      res.json({
        title: ERROR_TITLE[ERROR_CODE.NOT_FOUND],
        message: err.message,
        stackTrace: err.stack,
      });

      break;
    case ERROR_CODE.UNAUTHORIZED:
      res.json({
        title: ERROR_TITLE[ERROR_CODE.UNAUTHORIZED],
        message: err.message,
        stackTrace: err.stack,
      });

      break;
    case ERROR_CODE.FORBIDDEN:
      res.json({
        title: ERROR_TITLE[ERROR_CODE.FORBIDDEN],
        message: err.message,
        stackTrace: err.stack,
      });

      break;
    case ERROR_CODE.SERVER_ERROR:
      res.json({
        title: ERROR_TITLE[ERROR_CODE.SERVER_ERROR],
        message: err.message,
        stackTrace: err.stack,
      });

      break;
    default:
      console.log("No Error, All good!");
      break;
  }
};

export { errorHandler };
