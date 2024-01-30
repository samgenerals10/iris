import React from 'react'
import "../Subscribe/subscribe.css"

function Subscribe() {
  return (
    <>
    <div className='subscible-bg'>
        <div className='container'>
            <div className='row  subscible-Box'>
            <div class="col-sm">
    <input type="text" class="form-control sbuscible-from" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col-sm">
    <input type="text" class="form-control sbuscible-from" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div class="col-sm">
    <input type="email" class="form-control sbuscible-from" placeholder="Email address" aria-label="Email address"/>
  </div>
  <div className='col-sm'>
    <button className='sub-btn'>Subscribe</button>
  </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscribe