import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "./ContextWithHooksApp/Contexts/ThemeContext";
import Navbar from "./ContextWithHooksApp/Navbar";
import Form from "./ContextWithHooksApp/Form";
import { Language } from "./ContextWithHooksApp/Contexts/LanguageContext";
import Page from "./ContextWithHooksApp/Page";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Language>
          <Page>
            <Navbar />
            <Form />
          </Page>
        </Language>
      </ThemeProvider>
    </div>
  );
}

export default App;
