import { 
  GET_ARTICLE_LIST,
} from '../../constants'

const initialState = {
  token: null,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      return Object.assign({}, state, {
        articleList: action.json,
      });
    default:
      return state;
  }
}
