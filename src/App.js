import { React, useEffect } from 'react';

import Top from './components/layout/Top';
import Content from './components/layout/Content'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  
  useEffect(() => {
    document.body.style = 'background: #30115e;';
    // document.body.style = 'background-image: url("./img/ling.gif");'    
  }, []);
  return (
    <div className="App">
      <Top />
      <Content />
    </div>
  );
}

export default App;
