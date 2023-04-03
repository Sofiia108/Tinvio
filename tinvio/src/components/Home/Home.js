import React from 'react';
import './home.css';
import GreyRec from '../../assets/home-375/GreyRectangle.png'
import Smile from '../../assets/home-1920/c1_Smile.png';
import Stars from '../../assets/home-375/Stars-375.png';
import PlayButton from '../../assets/home-375/c2_play_icon.png';
import Screen1 from '../../assets/home-1920/c1_Screen1.png';
import Screen2 from '../../assets/home-1920/c1_Screen2.png';
import MiniRec from '../../assets/home-1920/c1_MiniRectangle.png';
import MidRec from '../../assets/home-1920/c1_MidRectangle.png';
import LeftRec from '../../assets/home-1920/c1_LeftRectangle.png';
import { Button } from '@mui/material';

function Home() {
  return (
    <div className='home_main'>
      
      <img src={GreyRec} id='greyRectangle'/>
      <img src={Stars} id='stars'/>
        <div className='home_container_1'>
          
            <div className='collecting_payments_1'>

              <p className='title'>Collecting payments <span id='spotlight'>is easy</span>, right?</p>
              <p className='subtitle'>
              Manage all your supply chain transactions
              in one dashboard. Get paid faster, reconcile
              quicker, grow bigger. 
              </p>
              <div className='centralize'>
              <Button variant='contained' color='primary'>Get Started Now</Button>
              <p className='caption'>
              It's free to try! 
              <img src={Smile}/>
              </p>
              </div>
              
            </div>
            <div className='screens_1'></div>

        </div>

        <div className='home_container_2'>
            <div className='h_2_text_container'>
              <p className='title'>Check out how it works </p>
              <p className='caption'>It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.</p>
              <div className='btn'>
                <Button><img src={PlayButton} id="c2_btn"/> Play Video</Button>
              </div>
            </div>
            <div className='container_chat_order_payment_2'>
                    <div className='chat_2'>

                    </div>
                    <div className='order_2'>

                    </div>
                    <div className='payment_2'>

                    </div>
            </div>
        </div>



        </div>
  )
}

export default Home;
        

