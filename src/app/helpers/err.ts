const err000 = 'Couldn\'t connect to server, Please check your internet connection!';
const err500 = 'Oops! An unexpected error occurred';
const err400 = 'Autentication error, Please try again!';

export function handleErr(error) {
  const ret = { ok: false, generated: true, status: error.status, error: err500 };

  if (error.status === 0) {
    ret.error = err000;
    return ret;
  }

  if (error.status >= 400 && error.status < 500) {
    ret.error = err400;
    return ret;
  }

  return ret;
}

export { err000, err400, err500 }
