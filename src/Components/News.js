import { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'General',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      password:(localStorage),
      email:(localStorage),
      showTopButton: [],
      page: 1,
      submitted : false,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} | NewsMonkey`;
  }
  async componentDidMount() {

    if(localStorage.getItem('email') === 'rehan@rmail.com' && localStorage.getItem('password') === 'REHAN123'){
    }
    else{
      this.setState({ submitted: true })
    }

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    //  
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  } 
  handlepreclick = async () => {
    console.log('previous');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=${this.state.page - 1}&pageSize=${this.props.pageSize
      }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  // onScrollHandler = () => {
  //   console.log(document.body.scrollTop)
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     this.setState({ showTopButton: true });
  //   } else {
  //     this.setState({ showTopButton: false });
  //   }
  // };

  // goToTop = () => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };
  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=${this.state.page - 1}&pageSize=${this.props.pageSize
      }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: this.state.articles.concat(parsedData.articles),
    });

  };

  handlenextclick = async () => {
    console.log('next');
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ef7e5d84f434bbd93d8b933bc642393&page=${this.state.page + 1}&pageSize=${this.props.pageSize
        }`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };


  render() {
    return (
      <>
        <ToastContainer
          autoClose={1500}
          hideProgressBar={true}
          closeButton={false}
        />
        {this.state.submitted && 
          <Navigate to={'/'}/>
        }
        <Navbar/>
        <center className="text-3xl text-center mb-3 mt-24 text-rose-950  font-semibold animate-bounce">Newsmonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</center>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row ">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 mb-10" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={element.description ? element.description.slice(0, 88) : ''}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="fixed bottom-10 right-10  z-10">
          {this.state.showTopButton && (
            <button type="button" className="btn btn-outline-primary rounded-full p-2 animate-pulse bg-primary text-white" onClick={this.goToTop}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
              </svg>
            </button>
          )}
        </div> */}
        {/* <div className="container flex justify-between">
          <button disabled={this.state.page <= 1} className={`${this.state.page <= 1 ? 'btn btn-dark' : 'btn btn-danger'}`} onClick={this.handlepreclick}>
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className={`${this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'btn btn-dark' : 'btn btn-danger'}`}
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
