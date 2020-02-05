import React from 'react';
import Quote from '../components/Quote';
import { Button } from '../components/Button';
import { fetchQuote } from '../services/api';

export default class QuoteApp extends React.Component {
  state = {
    quote: {
      name: '',
      text: '',
      img: ''
    }
  }
  
  fetch = () => fetchQuote()
    .then(quote => this.setState({ quote }));

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { quote } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Quote {...quote} style={{ display: 'flex', justifyContent: 'center' }} />
        <Button text="Get a new one" onClick={this.fetch} style={{ alignSelf: 'center' }} />
      </div>
    );
  }
}

