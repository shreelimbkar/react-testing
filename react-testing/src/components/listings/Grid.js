import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  renderList() {
    return this.props.items.map((item) => (
      <Single key={item.id} item={item}/>
    ));
  }

  render() {
    return(
      <div>
        <div className="row">
            <div className="col-12">
                <div className="card-group d-flex flex-wrap">
                    {this.renderList()}
                </div>              
            </div>
        </div>
      </div>
    )
  }
}
