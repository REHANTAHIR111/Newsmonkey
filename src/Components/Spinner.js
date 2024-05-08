import React, { Component } from 'react'
import loading from '../6.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center mt-40 mb-10 '>
            <img src={loading} alt="loading"width='40' />
      </div>
    )
  }
}
