
import './App.css';
import React from 'react'
import Boom from './Boom';
export default class App extends React.Component {
  state = {
    circle: "circle", bg: "Main", splash: 0,
    spells: 0, mic: false

  }
  spellsmaker = () => {
    this.setState({
      spells: 1
    })
  }
  micfn = () => {
    var a = this.state.mic;
    a === false ? this.setState({ mic: true }) : this.setState({ mic: false });

  }
  timerforsplash = () => {
    this.setState({
      splash: 1

    })
  }

  componentDidMount() {
    setTimeout(this.timerforsplash, 4000);
    setTimeout(this.spellsmaker, 6000);

  }

  whitebg = "Main white"
  bisquebg = "Main bisque"
  bisbg = "Main bis"
  redbg = "Main red"

  whitefn = "circleafter white"
  bisquefn = "circleafter bisque"
  bisfn = "circleafter bis"
  redfn = "circleafter red"
  whitecircle = () => {
    this.setState({
      circle: this.whitefn, bg: this.whitebg
    })
  }
  biscircle = () => {
    this.setState({
      circle: this.bisfn, bg: this.bisbg
    })
  }
  bisquecircle = () => {
    this.setState({
      circle: this.bisquefn, bg: this.bisquebg
    })
  }
  redcircle = () => {
    this.setState({
      circle: this.redfn, bg: this.redbg
    })
  }

  render() {

    return (

      <div className="App">
        {this.state.splash === 0 &&
          <div className="splash">

            <div className="splash-text-container">
              <div className="splash-text">
                Hey Dear...
              </div>
            </div>
          </div>}
        {this.state.splash === 1 &&
          <Boom circle={this.state.circle} bg={this.state.bg} splash={this.state.splash}
            spells={this.state.spells} mic={this.state.mic} whitecircle={this.whitecircle}
            biscircle={this.biscircle} bisquecircle={this.bisquecircle} redcircle={this.redcircle} micfn={this.micfn} />}
      </div>
    )
  }
}
