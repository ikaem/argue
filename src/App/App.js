import React from "react";

import './App.styles.css';

import Header from "../components/header.component/header.component";
import Main from "../containers/main.container/main.container";
import Footer from "../components/footer.component/footer.component";
import UserContextProvider from "../contexts/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <Header/>
      <Main/>
      <Footer/>
    </UserContextProvider>
  )
}

export default App;
