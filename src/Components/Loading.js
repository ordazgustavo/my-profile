import React from 'react'

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }

  return null
}

export default Loading
