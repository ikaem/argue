import React from "react";

import './App.styles.css';

import Header from "../components/header.container/header.container";
import Main from "../components/main.container/main.container";
import Footer from "../components/footer.container/footer.container";
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
