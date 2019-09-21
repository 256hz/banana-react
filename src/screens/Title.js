import React from 'react'

const Title = ({ history }) => {
  setTimeout(_ => {
    history.push('/loginregister')
  }, 1500)
  return <div className="title large-text">
    THE<br />
    BANANA<br />
    APP.<br />
  </div>
}

export default Title