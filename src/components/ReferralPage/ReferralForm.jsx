import React from 'react'
import ReferLinkForm from '../dashboard/ReferLinkForm'
import logo from '../../Assets/logo.png'

import "./ReferralForm.css"

function ReferralForm() {
  return (
    <div className='ReferralFormPage'>
      <img src={logo} alt="" />
      <h4><b> Fill Out the Form To Participate in StudyMEDIC Referral Program</b></h4>
      <p>To be part of this 'StudyMEDIC Referral Program' you need to fill out the details in the form below. We will get back to you at the earliest.</p>
    <br />
        <ReferLinkForm/>
        <br />
    </div>
  )
}

export default ReferralForm



