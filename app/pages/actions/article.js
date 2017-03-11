import XHR from '../components/XHR'

import { GET_ARTICLE_LIST } from '../../constants'

function receiveArticleList(json) {
  return {
    type: GET_ARTICLE_LIST,
    json,
    receivedAt: Date.now()
  };
}

export function getArticleList(params) {
  return dispatch => {
    XHR({
      url:'/forum/getArticleList',
      success: (data) => {
        dispatch(receiveArticleList())
      },
    });
  }
}
