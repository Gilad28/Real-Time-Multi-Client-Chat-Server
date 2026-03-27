import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [inChat, setInChat] = useState(false)
  
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  // join the chatroom
  // mioght need to change on the backend
  function handleJoin(e) {
    e.preventDefault()

    if (name.trim() === '') return

    setInChat(true)

    // add a basic system message when user joins
    setMessages([
      {
        user: 'System',
        message: name + ' joined the chat'
      }
    ])
  }

  // send a message to the chatroom, again backend might need to play a role here.
  function handleSend(e) {
    e.preventDefault()

    if (text.trim() === '') return

    const newMessage = {
      user: name,
      message: text
    }

    setMessages([...messages, newMessage])
    setText('')
  }

  if (!inChat) {
    return (
      <div className="join-screen">
        <h1>Chat Room</h1>
        <form onSubmit={handleJoin}>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Join</button>
        </form>
      </div>
    )
  }

  return (
    <div className="chat-room">

      <h2>Welcome, {name}</h2>

      <div className="messages">

        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.user}: </strong>{msg.message}
          </div>
        ))}

      </div>

      <form onSubmit={handleSend}>

        <input
          type="text"
          placeholder="Type message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App