export default (state = null, action) => {
  switch (action.type) {
    case 'select_helpProvider':
    {
      console.log(action);
      return action.payload;
    }

    default:
      return state;
  }
};
