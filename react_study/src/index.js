import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./Reducer/Index";

//배포 레벨에서는 리덕스 발생시 찍히는 logger을 사용하지 않는다. (무슨의민지는 조금 더 공부해봐야 할 것 같음)
const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger))

// 위에서 만든 reducer store를 사용하기 위해 넣어주는 단계

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  //만든 스토어를 상위계층에 제공
  <Provider store={store}>
    <App/>
  </Provider>
)
document.getElementById('root')