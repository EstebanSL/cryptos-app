import React from 'react'

const Error = ( {children }: any) => {
  return (
    <p style={{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '600',
      background: '#ff4040',
      padding: '.5rem 1rem',
      borderRadius: '5px',
      margin: '.5rem 0'
    }}>
      { children }
    </p>
  )
}

export default Error