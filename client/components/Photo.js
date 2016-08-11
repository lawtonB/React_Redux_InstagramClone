import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({
  render() {
    return (
      <figure className="grid-figure">
        <div className='grid-photo-wrap'>
          <Link to={`/view/${this.props.post.code}`}></Link>
            {this.props.post.caption}
            <img src={this.props.post.display_src} />
        </div>

      </figure>
    )
  }
});

export default Photo;
