// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userName = event.target.elements[0].value;
    onSubmitUsername(userName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user-name">Username:</label>
        <input id="user-name" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
