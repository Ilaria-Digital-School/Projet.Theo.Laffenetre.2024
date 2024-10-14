import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
/*import { LoadingProvider } from './components/LoadingContext';*/

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        
          <AppWrapper />
        
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
