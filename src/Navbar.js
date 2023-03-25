import * as React from 'react';
// import './css/Re'

export default function AccountMenu(props) {
    const room = localStorage.getItem('room')
    return (
        <div className='navbarmenu' >
        <div style={{backgroundColor:'#024391', padding: '10px 17px', borderRadius: '50%', marginRight: '15px', fontSize: '14px',boxShadow:'-8px -6px 33px 16px rgba(0,0,0,0.1),12px 15px 32px -5px rgba(0,0,0,0.1)' }} className="box">{room.slice(0, 1)}</div>
        <p style={{ fontSize: '17px' }}>{room}</p>
        
        </div>

            
        
    );
}
