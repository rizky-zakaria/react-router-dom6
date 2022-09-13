import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {

    const params = useParams();

  return (
    <div>
        <h1>
            This is Me, {params.username} 
        </h1>
    </div>
  )
}

export default Profile