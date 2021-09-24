
import './App.css';

import React from 'react'
import { BiFemaleSign, BiMaleSign } from "react-icons/bi"
import { RiMicLine, RiMicOffFill } from "react-icons/ri"
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export default class App extends React.Component {

  state = {
    circle: "circle", bg: "Main", splash: 0,
    spells: 0, mic: false

  }

  // , Dictaphone = () => {
  //   const {
  //     transcript,
  //     listening,
  //     resetTranscript,
  //     browserSupportsSpeechRecognition
  //   } = useSpeechRecognition();

  //   if (!browserSupportsSpeechRecognition) {
  //     return <span>Browser doesn't support speech recognition.</span>;
  //   }
  // }
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

  a = [{
    name: "hello",
    id: [
      {
        name: "hello"
      }
    ]

  }]





  white = "colorchangers white"
  bisque = "colorchangers bisque"
  bis = "colorchangers bis"
  red = "colorchangers red"
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
          <> <div className="nav">
            <div className="gender">
              <BiFemaleSign className="sign" />
              <BiMaleSign className="sign" />
            </div>
            <div className="colorbar">
              <div className={this.white} onClick={this.whitecircle}></div>
              <div className={this.bis} onClick={this.biscircle}></div>
              <div className={this.bisque} onClick={this.bisquecircle}></div>
              <div className={this.red} onClick={this.redcircle}></div>
            </div>
          </div>


            <div className={this.state.bg}>
              <div className="spacer"></div>
              <div className={this.state.circle} />
              <div className="spacer">

              </div>
            </div>
            <div className="floating-bottom-text">
              <div className="floater-text-container">
                {this.state.spells === 0 && <h2>Welcome...</h2>}
                {this.state.spells === 1 && <h2>Say "Hey Dear" and start talking...</h2>}

              </div>
            </div>
            <div className="floating-bottom-bar">
              {this.state.mic === true && <RiMicLine className="mic" onClick={this.micfn} />}
              {this.state.mic === false && <RiMicOffFill className="mic" onClick={this.micfn} />}
              <div>Developed by Venky</div>
            </div>
          </>
        }
      </div>
    )
  }
}
