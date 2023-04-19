
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

function App() {
  const [text, setText] = useState(" type your desire markdown here...")
 
  return (
    <>
      <main>
        <h1>Markdown Editor</h1>
        <article>
          <label htmlFor='markdown'></label>
          <textarea name='textarea' id='textarea' cols='30' rows='10' required placeholder='Type here...'value={text} onChange={(e)=>setText(e.target.value)}>

          </textarea>

          <h3>Output:</h3>
          <div>
            <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  )
}

export default App
