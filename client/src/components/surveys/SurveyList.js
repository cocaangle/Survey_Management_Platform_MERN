import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length > 0) {
      return this.props.surveys.map(survey => {
        return (
          <div className="card green darken-1" key={survey._id}>
            <div className="card-content white-text">
              <span className="card-title">{survey.title}</span>
              <p>
                {survey.body}
              </p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h4>DashBoard</h4>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
