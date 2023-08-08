import React from 'react'
import Grid from '@mui/material/Grid';
import img1 from '../../Assets/email-info.jpg'
import img2 from '../../Assets/signup-img.png'
import img3 from '../../Assets/rewards.png'
import { FcDown} from 'react-icons/fc';
import useMediaQuery from "@mui/material/useMediaQuery";
import {FcRight} from 'react-icons/fc'

function HomePoints() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <br />
        <h2 style={{textAlign:'center'}}><b> How it works</b></h2>
<br />
        <Grid container spacing={2}  className='homePoints'>
        <Grid item sm={4} xs={12} className='grid'>
   <img src={img2} alt="" /> 
   
   {isSmallScreen ? (
          <>
          <p>Signup and create your profile</p>
            <br />
       <FcDown className='arrowDown'/>
          </>):(
            <>
          < FcRight style={{width:'18%'}}/>
          <p>Signup and create your profile</p>
            </>
          )}
        </Grid>
        <Grid item sm={4} xs={12} className='grid'>
   <img src="https://media.istockphoto.com/id/925857650/photo/white-and-blue-chat-bubbles-imprinted-with-contact-us-symbols-on-white-background.jpg?s=612x612&w=0&k=20&c=nxph6jVSTkm-n_spJoQRiTf__6wc-klVtEF8wrXJftw=" alt="" /> 
   
   {isSmallScreen ? (
          <>
          <p>Share your friends emails and other details</p>
            <br />
       <FcDown className='arrowDown'/>
          </>):(
            <>
          < FcRight style={{width:'18%'}}/>
          <p>Share your friends emails and other details</p>
            </>
          )}
        </Grid>
        <Grid item sm={4} xs={12} className='grid'>
          <img src={img3} alt="" className='earnImage' />
          <p>Earn 300 Points for every friend who enrols in a Course</p>
        </Grid>
        </Grid>
    </div>
  )
}

export default HomePoints