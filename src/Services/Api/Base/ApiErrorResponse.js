export default function ApiErrorResponse(error, message) {
  this.error = true;
  this.errorCode = error;
  this.message = message;
}
