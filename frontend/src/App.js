import React from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import { BrowserRouter as Router } from 'react-router-dom'
import store from "./store/store";
import { Provider  } from 'react-redux' ;

const App = () => {
  return (
    <>
    <Provider store={store}>
    <Router>
      <AllRoutes/>
    </Router>
    </Provider>
    </>
  );
}

export default App;
