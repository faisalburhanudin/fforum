import React from 'react'
import FormPost from './FormPost'

class ListPost extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="box">
          <FormPost/>
          <hr/>
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="http://placehold.it/128x128" alt="desc"/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>
                    <a href="urlnya.com">Urlnya.com</a>
                  </strong>
                  <small>
                    · 3 hrs</small>
                  <br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus,
                  nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor
                  blandit rutrum. Nunc in tempus turpis.
                  <br/>
                  <small>
                    <a>Delete</a> -
                    <a>Update</a> -
                    <a>Like</a> - 
                    <a>Reply</a>
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ListPost