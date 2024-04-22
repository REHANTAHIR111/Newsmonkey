import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 19,
    category: 'General'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=1&pageSize=${this.props.pageSize}` ;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }

  handlepreclick = async() =>{
    console.log('previous');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` ;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  };

  handlenextclick = async() =>{
    console.log('next');
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=${this.state.page + 1}&pageSize=${this.props.pageSize}` ;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  };

  render() {
    return (
      <div className='container-xl my-12'>
          <h1 className='text-3xl text-center mb-4 mt-20  text-rose-950  font-semibold animate-bounce'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>  
            })} 
          </div>
          <div className="container flex justify-between">
            <button disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handlepreclick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize )} className="btn btn-dark"onClick={this.handlenextclick}>Next &rarr;</button>
          </div>    
      </div>
    )
  }
}

export default News
