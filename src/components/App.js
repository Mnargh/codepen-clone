import React, { useState, useEffect } from 'react'
import Editor from './Editor'

function App() {

  const [ html, setHtml] = useState('')
  const [ css, setCss] = useState('')
  const [ js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `
      )
    }, 250 );
    // will trigger after component rendered, any time html/css/js changes only after a 250ms delay

    return () => clearTimeout(timeout)
    // cancles timeout update if srcDoc needs updating before timeout expires
    // so only time setting srcdoc is if 250ms delay in typing
  }, [html, css, js])
  


  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="xml" 
          displayName="HTML"
          value={html} 
          onChange={setHtml} 
        />
        <Editor 
          language="css" 
          displayName="CSS"
          value={css} 
          onChange={setCss} 
        />
        <Editor 
          language="javascript" 
          displayName="JS"
          value={js} 
          onChange={setJs} 
        />
      </div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
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
