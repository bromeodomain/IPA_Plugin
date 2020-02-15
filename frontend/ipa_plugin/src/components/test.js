import React from 'react';
// import displayImage from './../get_text_to_ipa.js';
import axios from 'axios';

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      image: ""
    }
  }

  componentDidMount() {
    // let IPAImage = `http://localhost:8000/api/${ipa}`;
    let IPAImage = `http://localhost:8000/api/a`;
    axios.get(IPAImage)
        .then(response => {
            this.setState({
              image: response.data.image
            })
            console.log(this.state.image)
        }, error => {
            console.error(error);
        });
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
        <img src={this.state.image} />
      </div>
    )
  }
}

export default Test;
