import EditForm from '../Components/Edit/EditForm'
import Moving from './Movingimages/Moving'
import React from 'react'

function Edit() {
  return (
    <div className='editpage'>
        <EditForm />
        <div>
        <Moving />
      </div>
    </div>
  )
}

export default Edit