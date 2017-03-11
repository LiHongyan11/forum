import XHR from '../components/XHR'

import { USER_LOGIN } from '../../constants'

function receiveUserInfo(json) {
  return {
    type: GET_USER_INFO,
    json,
    receivedAt: Date.now()
  };
}

export function userLogin(params, success) {
  return dispatch => {
    XHR({
      url:'/forum/login',
      method: 'post',
      data: params,
      success: (data) => {
        success && success();
      },
    });
  }
}

export function userRegister(params, success) {
  return dispatch => {
    XHR({
      url:'/forum/register',
      method: 'post',
      data: params,
      success: (data) => {
        success && success();
      },
    });
  }
}