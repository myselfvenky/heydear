import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
const Modal = (props) => {
    var a = "Hey ! Welcome to Hey Dear"
    const { speak } = useSpeechSynthesis();
    return (
        <div className="open">
            <div className="label">
                A Bot to talk about your feelings...
            </div>
            <button className="gs" onClick={() => {
                props.next()
                speak({ text: a })
            }

            }>Get Started</button>
        </div>

    )
}

export default Modal
