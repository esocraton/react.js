import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { sixteenthChange } from '../../redux/features/bool/sixteenthBoolSlice'



function Desk16() {

  const dispatch = useDispatch()
  const { sixteenthBooler } = useSelector(state => state.sixteenthBooler)
  console.log(useSelector(state => state.sixteenthBooler))

  return (
    <div>
    <div className="card" style={{ width: '10rem', backgroundColor: sixteenthBooler ? 'red' : 'green', }}>
      <div className="card-top">{sixteenthBooler}</div>
      <div className="card-body text-center">
        <h5 className="card-title text-light fs-1 fw-bold">16</h5>
        <button className="btn btn-primary" onClick={() => dispatch(sixteenthChange())}>DEĞİŞTİR</button>
      </div>
    </div>
  </div>
  )
}

export default Desk16
