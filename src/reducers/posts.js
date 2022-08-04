


export default (posts = {}, action) => {
  switch (action.type) {

    case 'FETCH_DEFAULT':
        return action.payload;

    case 'FETCH_CITY':
    return action.payload;

    default:
      return posts;
  }
};
