import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase';
import './css/Responsive.css'
import toast, { Toaster } from 'react-hot-toast';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


export const Rightbar = (props) => {
    const [user, setUser] = useState([])
    const qr = query(collection(db, props.roomid));



    const map = new Map();
    useEffect(
        () => {
            onSnapshot(qr, (snapshot) => setUser(snapshot.docs.map((doc) => [{ name: doc.data().name, img: doc.data().userimg }])))
        }
        , [props.roomid]);
    user.forEach((item) => {
        map.set(item[0].name, item[0].img);
    })





    return (
        <>
            <Toaster />


            <div className='leftbar' id='showleft' style={{ backgroundColor: '#252329', minWidth: '284px', position: 'relative', height: '100%', flex: '0.17', transition: 'all 0.25s',overflow:'scroll'}}>
                <div className="rommspecificidandp" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'center', marginTop: '30px',padding:'20px', backgroundColor:'#03336E', margin:'10px', borderRadius:'10px' }}>
                    <p style={{ color: 'white', fontFamily: 'cursive', fontWeight: '500', fontStyle: 'normal', fontSize: '32px', letterSpacing: '-0.035em', marginLeft: '31px', marginRight: '26px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>{props.roomid}<ContentCopyIcon style={{ fontSize:'32px', marginLeft: '12px', width: '30px', marginBottom: '-1.8px', cursor: 'pointer', color: '#B9B6B6' }} onClick={() => {
                        navigator.clipboard.writeText(props.roomid); toast.success('Room id copied to clipboard', {
                            style: {
                                fontFamily: 'Poppins',
                                fontSize: '12.5px'
                            },
                        });
                    }} /></p>

                </div>
               { user&&user.length>0&&
                <div className="sepater" style={{ overflowY: 'scroll', height: '60vh', padding:'5px', backgroundColor:'#2D2D2F', margin:'10px', borderRadius:'10px'  }}>
                <h5 className="memheader" style={{fontFamily:'cursive'}}>Members</h5>
                    
                    {
                        Array.from(map, ([key, value]) => {
                            return (
                                <div className="people" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '16px', marginBottom: '12px' }}>
                                    {/* <FiberManualRecordIcon color="disabled" style={{ width: '10px', marginLeft: '29.99px', marginTop: '1px' }} /> */}
                                    <div className="imagebox" style={{ width: '36px', height: '36px', borderRadius: '100%', marginLeft: '20px' }}>
                                        <img src={value} style={{ width: '34px', height: '34px', borderRadius: '11px' }} alt="" />
                                    </div>
                                    <p style={{ color: '#B9B6B6', marginLeft: '10px', font: 'Montesterrat', fontWeight: '500', fontStyle: 'normal', fontSize: '18px', letterSpacing: '-0.035em' }}>{key}</p>
                                </div>)
                        })
                    }
                </div>}

                <div className="sepater" style={{maxHeight: '50vh', padding:'5px', backgroundColor:'#2D2D2F', margin:'10px', borderRadius:'10px'  }}>
                <h5 className="memheader" style={{fontFamily:'cursive'}}>Shared Files&nbsp; : </h5>
                </div>  



            </div>
        </>
    )
}
