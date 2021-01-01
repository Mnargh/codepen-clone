import React, { useState } from 'react'
import Editor from './Editor'

function App() {

  const [ html, setHtml] = useState('')

  return (
    <>
      <div className="pane top">
        <Editor 
          language="xml" 
          displayName="HTML"
          value={html} 
          onChange={setHtml} 
        />
        <Editor />
        <Editor />
      
      </div>
      <div className="pane">
        <iframe 
          title="output"
          sandbox="allow-scripts" // prevents codepen application accessing document cookies etc if saving code and sharing with someone else
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
