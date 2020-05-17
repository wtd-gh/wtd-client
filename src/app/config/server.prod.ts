const S_DOMAIN = 'https://wtdserver.herokuapp.com/';

const QUOTE_URL = 'https://quotes.rest/qod.json';


// Authentiction URIs
const AUTH_URI = 'auth/login';
const AUTH_REG_URI = 'auth/register';
const AUTH_CHK_URI = 'auth/islogin';
const UNAME_AVAIL_URI = 'auth/isUnameAvail';
const EMAIL_AVAIL_URI = 'auth/isEmailAvail';


// User data URIs
const ADD_TASK_URI = 'user/addtask';
const DEL_TASK_URI = 'user/deletetask';
const ALL_TASKS_URI = 'user/alltasks';
const WTD_URI = 'user/whattodo';
const DEC_WORK_URI = 'user/decreasework';

export {
  S_DOMAIN,
  AUTH_URI,
  AUTH_REG_URI,
  AUTH_CHK_URI,
  UNAME_AVAIL_URI,
  EMAIL_AVAIL_URI,
  WTD_URI,
  DEL_TASK_URI,
  ADD_TASK_URI,
  ALL_TASKS_URI,
  DEC_WORK_URI,
  QUOTE_URL
};
