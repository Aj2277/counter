import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  )
}
const headerStyle = {
  width: '600px',
  color: '#fff',
  backgroundColor: '#0b6efd',
  textAlign: 'center',
  padding: '1px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px'
}

export default Header;