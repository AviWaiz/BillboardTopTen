import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class Year extends React.Component{
  constructor(props){
    super(props);
    this.playFromYear = this.playFromYear.bind(this);
  }

  playFromYear() {
    this.props.showMonths(this.props.year);
    this.props.setChartDate(this.props.yearDates[this.props.yearDates.length - 1]); // play from last song in year
  }

  render() {
    return (
        <div className="decadeYear" onClick={this.playFromYear}>
          {this.props.year}
        </div>
    );
  }
}

export default Year;
