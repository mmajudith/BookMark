import React from 'react';
import './App.css';
import Header from './Components/Header';
import Features from './Components/Features'
import DownloadEx from './Components/DownloadEx';
import FreAskQues from './Components/FreAskQues';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">

      <Header />
      <Features />
      <DownloadEx />
      <FreAskQues />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
