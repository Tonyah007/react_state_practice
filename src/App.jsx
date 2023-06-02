import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Tonia Bernard",
      bio: "Programmer",
      imgSrc:"/logo512.png",
      profession: "Software Engineer",
      show: true,
    };
  }

  handleClick(show) {
    this.setState({ show: !show});
  }

  render() {
    return (
      <main className="app">
        {this.state.show && (
          <article>
            <img src={this.state.imgSrc} alt='photo'/>
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <p>{this.state.profession}</p>
          </article>
        )}
{/* This button functions as a pathway to toggle between showing the  */}
        <button onClick={() => this.handleClick(this.state.show)}>
          {this.state.show ? 'Hide details' : 'Show details'}
        </button>
      </main>
    );
  }
}



export default App;
