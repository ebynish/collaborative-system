
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Documents from './pages/Documents';
import Dashboard from './pages/Dashboard';
import Thread from './pages/Thread';
import DocumentPreview from './pages/DocumentPreview';
import Collaboration from './pages/Collaboration';
// import Inbox from './Inbox';
// import CreateCollaborations from './CreateCollaborations';
// import Threads from './Threads';
// import Help from './Help';
// import Documentation from './Documentation';

const App =()=> {
  return (
    <ChakraProvider>
      <Router>
        
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/documents" element={<Documents />} />
    <Route path="/documents/:id" element={<DocumentPreview />} />
    <Route path="/threads" element={<Thread />} />
    <Route path="/collaborations" element={<Collaboration />} />
        {/* <Route path="inbox" element={<Inbox />} />
    
    
    <Route path="help" element={<Help />} />
    <Route path="documentation" element={<Documentation />} /> */}
  </Routes>
  </Router>
  </ChakraProvider>
  );
}

export default App;
