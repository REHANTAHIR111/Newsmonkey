import React, { Component } from 'react'
import loading from '../6.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center my-3'>
            <img src={loading} alt="loading"width='40' />
      </div>
    )
  }
}
