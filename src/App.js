import { React, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Top from './components/layout/Top';
import Content from './components/layout/Content'
import Info from './components/pages/Info'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {  
  useEffect(() => {
    document.body.style = 'background: #30115e;';
  }, []);
  return (
    <div className="App">
      <Top />
      <Route path="/" exact component={Content} />
      <Route path="/info" exact component={Info} />
    </div>
  );
}
