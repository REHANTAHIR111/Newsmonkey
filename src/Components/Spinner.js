import React, { Component } from 'react'
import loading from '../loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center mt-1'>
            <img src={loading} alt="loading"width='40' />
      </div>
    )
  }
}
