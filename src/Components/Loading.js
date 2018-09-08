import React from 'react'

import Spinner from './Spinner'

const Loading = ({ pastDelay, error, timedOut, retry }) => {
  if (error) {
    return (
      <div>
        Error!{' '}
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    )
  }
  if (timedOut) {
    return (
      <div>
        Taking a long time...{' '}
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    )
  }
  if (pastDelay) {
    return <Spinner />
  }
  return null
}

export default Loading
