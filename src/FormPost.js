import React from 'react';

class FormPost extends React.Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="http://placehold.it/128x128" alt="avatar"/>
          </p>
        </figure>
        <div className="media-content">
          <form>
            <div className="field">
              <label className="label">Url</label>
              <div className="control">
                <input className="input" type="text" placeholder="Url media"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <p className="control">
                <textarea className="textarea" placeholder="write your description"></textarea>
              </p>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </article>
    )
  }
}

export default FormPost