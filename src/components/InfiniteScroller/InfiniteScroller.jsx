import React, { Component } from 'react';

export class InfiniteScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const windowHeight = window.innerHeight;
    const currentScroll = e.target.documentElement.scrollTop;
    if (!this.state.isLoading) {
      const maxScroll = e.target.documentElement.offsetHeight - windowHeight;
      if (currentScroll + windowHeight > maxScroll) {
        this.loadMore();
      }
    }
  }

  loadMore() {
    this.setState({
      loading: true,
    });

    this.props.loadMore().finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return this.state.isLoading ? (
      'Loading...'
    ) : (
      <React.Fragment>
        {this.props.children}
        <button onClick={this.loadMore}>Load more</button>
      </React.Fragment>
    );
  }
}
