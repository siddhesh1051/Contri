import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './css/split.css'
import { db } from './firebase';

const Split = ({ splitTitle, splitAmount, uid, roomid }) => {

  const [splitUsersPhoto, setSplitUsersPhoto] = useState([])
  const [splitUsers, setSplitUsers] = useState([])

  const qr = query(collection(db, roomid), orderBy('splitAmount', 'asc'));

  useEffect(() => {
    onSnapshot(qr, (snapshot) => {
      setSplitUsers(snapshot.docs.map((doc) => doc.data()))
    })
  }, [roomid])

  useEffect(() => {
    setSplitUsersPhoto(splitUsers.map((item) => {
      if (item.splitTitle === splitTitle && item.splitAmount === splitAmount) {
        return item.splitUsersPhoto
      }
      else {
        return null
      }
    }))
  }, [splitUsers])


  const handlePay = () => {
    // console.log(splitUsers)
    // console.log(splitUsersPhoto)
  }


  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className='splitBox'>
        <div className='splitTitle'>
          <h3>{splitTitle}</h3>
        </div>
        {/* <div className='splitDescription'>
                <p>Split Description</p>
        </div> */}
        <div className='splitAmount'>
          <h1>{splitAmount + " /-"}</h1>
        </div>
        <div className='splitUsersImg'>
          <div className='splitAvatarDiv'> 
            {
              splitUsersPhoto.map((item) => {
                if (item !== null) {
                  return item.map((item) => {
                    return <img className='splitAvatar' src={item} alt='splitUsersPhoto' />
                  })
                }
                else {
                  return null
                }
              })

            }
          </div>
        </div>
        {


          <><button className='splitPay' onClick={handlePay}>Pay</button>
            {/* <button className='splitPayDisabled' disabled>Pay</button> */}
          </>

        }
      </div>
    </div>
  )
}

export default Split
