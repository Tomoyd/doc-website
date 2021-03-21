function logger(store) {
  const { getState } = store;
  return (next) => (action) => {
    console.log("willDispatch :>> ", action);
    const returnVal = next(action);
    console.log("state :>> ", getState());

    return returnVal;
  };
}

function logger2({ getState }) {
  return (next) => (action) => {
    console.log("willDispatch222 :>> ", action);
    const returnVal = next(action);
    console.log("state222 :>> ", getState());

    return returnVal;
  };
}

const middlewares = [logger, logger2];
export default middlewares;
