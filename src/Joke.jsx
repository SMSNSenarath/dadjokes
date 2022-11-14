import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  getColor() {
    if (this.props.votes >= 15) {
      return "rgb(76, 175, 80)";
    } else if (this.props.votes >= 12) {
      return "rgb(139, 195, 74)";
    } else if (this.props.votes >= 9) {
      return "rgb(205, 220, 57)";
    } else if (this.props.votes >= 6) {
      return "rgb(255, 235, 59)";
    } else if (this.props.votes >= 3) {
      return "rgb(255, 193, 7)";
    } else if (this.props.votes >= 0) {
      return "rgb(255, 152, 0)";
    } else {
      return "rgb(244, 67, 54)";
    }
  }

  getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote} />
          <span className="Joke-votes" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i className={this.getEmoji()}></i>
        </div>
      </div>
    );
  }
}

export default Joke;
