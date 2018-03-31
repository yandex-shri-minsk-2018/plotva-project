import React, { Component } from 'react';

export class InfiniteScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.container = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('scroll', this.handleScroll, { passive: true, capture: true });
  }

  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (this.container) {
      const containerHeight = this.container.clientHeight;
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      if (!this.state.isLoading) {
        if (scrollTop + windowHeight >= containerHeight - 500) {
          this.loadMore();
        }
      }
    }
  }

  loadMore() {
    this.setState({
      isLoading: true,
    });

    this.props.loadMore().finally(() => {
      this.setState({ isLoading: false });
    });
  }

  setRef(node) {
    this.container = node;
  }

  render() {
    return this.state.isLoading ? (
      'Loading...'
    ) : (
      <div ref={this.setRef}>
        {this.props.children}
        <button onClick={this.loadMore}>Load more</button>
      </div>
    );
  }
}
