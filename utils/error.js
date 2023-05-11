export const createError = (status, message) => {
  const err = {
    status: status,
    message: message,
  };
  return err;
};
