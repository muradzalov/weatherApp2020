import React from 'react'

export default function ErrorHandler({errorMessage, errorColor}) {
  // console.log('ErrorHandler props below: ', props)

  return (
    <div
      style={{
        display: 'flex',
        width: "80%",
        height: '48px',
        marginTop: '16px',
        backgroundColor: `${errorColor ? errorColor : '#b3ccff'}`,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {errorMessage ? errorMessage : 'Default error message'}
      </div>
  )
}