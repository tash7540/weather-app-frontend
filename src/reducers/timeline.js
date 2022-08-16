export default (timelineData = {}, action) => {
  switch (action.type) {

    case 'FETCH_TIMELINE_CITY':
      return action.payload;


    default:
      return timelineData;
  }
};
