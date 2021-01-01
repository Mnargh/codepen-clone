import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

// importing languages to use in each editor
import 'codemirror/mode/xml/xml' // functionally same as html
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor( props ) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props

  function handleChange( editor, data, value ) {
    onChange(value)
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true
        }}
      />
      Editor
    </div>
  )
}
