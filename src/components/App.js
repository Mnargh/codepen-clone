import React from 'react'
import Editor from './Editor'

function App() {
  return (
    <>
      <div className="pane top">
        <Editor />
        <Editor />
        <Editor />
      
      </div>
      <div className="pane">
        <iframe 
          title="output"
          sandbox="allow-scripts"
          // prevents codepen application accessing document cookies etc if saving code and sharing with someone else
          frameborder="0"
          width="100%"
          height="100%"
          >

        </iframe>
      </div>
    </>
  );
}

export default App;
