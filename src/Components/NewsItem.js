import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props
    return (
      <div>
          <div className="card my-3">
            <img src={!imageUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2023/11/16/0db4b70f8446f608731c8e8212bf661b1700109462810402_original.jpg?impolicy=abp_cdn&imwidth=1200":imageUrl}/>
            <div className="card-body">
              <h2 className='font-semibold text-lg card-title'>{title}</h2>
              <p className="card-text">{description}</p>
              <p class="card-text"><small class="text-muted">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-sm mt-2 btn-info">Read more..</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
