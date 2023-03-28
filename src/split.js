import { LinearProgress } from '@mui/material';
import { fontWeight } from '@mui/system';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './css/split.css'
import { db } from './firebase';

const Split = ({ splitTitle, splitAmount, uid, roomid, username }) => {

  const [splitUsersPhoto, setSplitUsersPhoto] = useState([])
  const [splitUsers, setSplitUsers] = useState([])
  const [usersPaid, setUsersPaid] = useState(1)
  const [seeUsers, setseeUsers] = useState([])
  const [splitUsersCount, setSplitUsersCount] = useState(0)

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

  useEffect(() => {
    setSplitUsersCount(splitUsersPhoto.map((item) => {
      if (item !== null) {
        return item.length
      }
      else {
        return null
      }
    }))

    setSplitUsersCount(splitUsersCount => splitUsersCount.filter(item => item !== null))

  }, [splitUsersPhoto])


  console.log(splitUsersPhoto)
  console.log(splitUsersCount[0])




  
  

  useEffect(() => {
    setseeUsers(splitUsers.map((item) => {
      if (item.splitTitle === splitTitle && item.splitAmount === splitAmount) {
        return item.splitBy
      }
      else {
        return null
      }
    }))
  }, [splitUsers])

  console.log(seeUsers)

  // console.log(splitUsersCount)

  const handlePay = () => {
    // console.log(splitUsers)
    // console.log(splitUsersPhoto)
  }


  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className='splitBox'>
        <div className='splitTitle'>
          <p>{splitTitle}</p>
        </div>
        {/* <div className='splitDescription'>
                <p>Split Description</p>
        </div> */}
        <div className='splitAmount'>
          <h1 ><span style={{fontFamily:"sans-serif", fontWeight:'200'}}>₹ </span>{+ Math.round(splitAmount/splitUsersCount[0] * 100) / 100}</h1>
        </div>
        <div className='progressBarDiv'>
        <LinearProgress className='progressBar' variant="determinate" value={(usersPaid* 100)/splitUsersCount} />
        <p className='countNum'>{usersPaid}/{splitUsersCount} paid</p>
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
        <div className='splitPayDiv'>
        {
          
          seeUsers.map((item) => {
            if (item !== null && item !== username )  return <button className='splitPay' onClick={handlePay}>Pay</button>
            else if (item !== null && item === username) return <button className='splitPayDisabled' disabled>Pay</button>
                else 
              return null
            
          })
          // seeUsers.map((item) => {
          //   console.log(item)
          //   if (item !== null) {
          //     return item.map((item) => {
          //       return <button className='splitPay' onClick={handlePay}>Pay</button>
          //     })
          //   }
          //   else {
          //     return null
          //   }
          // })


          // ?<button className='splitPay' onClick={handlePay}>Pay</button>
          // :<button className='splitPayDisabled' disabled>Pay</button>
          

        }

        </div>
      </div>
    </div>
  )
}

export default Split
