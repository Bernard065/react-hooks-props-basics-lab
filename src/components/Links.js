import React from 'react'

function Links(props) {
  return (
    <div>
        <h3>Links</h3>
        <a href='#github'>{props.github}</a>
        <a href='#linkedin'>{props.linkedin}</a>
    </div>
  )
}

export default Links