import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="card shadow-xl rounded relative overflow-hidden bg-cover bg-no-repeat">
        <span class="bg-emerald-800 animate-pulse absolute text-white text-md font-medium z-1 right-0 px-2.5 py-0.5 rounded-xl">{source}</span>
          <img className='transition-all duration-500 hover:scale-110' src={!imageUrl ? "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/15/74385-hacker-pixabay.jpg?itok=raw77Ci5&c=dc4689881a8e4678456af987aba25e8f" : imageUrl} />
          <div className="card-body">
            <h2 className='font-semibold text-lg card-title'>{title}</h2>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-red-700 font-medium">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-sm mt-2 btn-info">Read more..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
