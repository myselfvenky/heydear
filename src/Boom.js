
import React from 'react'
import { BiFemaleSign, BiMaleSign } from "react-icons/bi"
import { RiMicLine, RiMicOffFill } from "react-icons/ri"
import { useSpeechSynthesis } from 'react-speech-kit'



const Boom = (props) => {
    var a = "Hii Tanvi"
    const { speak } = useSpeechSynthesis();

    return (
        <div className="page"> <div className="nav">
            <div className="gender">
                <BiFemaleSign className="sign" />
                <BiMaleSign className="sign" />
            </div>
            <div className="colorbar">
                <div className="colorchangers white" onClick={props.whitecircle}></div>
                <div className="colorchangers bis" onClick={props.biscircle}></div>
                <div className="colorchangers bisque" onClick={props.bisquecircle}></div>
                <div className="colorchangers red" onClick={props.redcircle}></div>
            </div>
        </div>


            <div className={props.bg}>
                <div className={props.circle} onClick={() => speak({ text: a })} />
            </div>
            <div className="floating-bottom-text">
                <div className="floater-text-container">
                    {props.spells === 0 && <h2>Welcome...</h2>}
                    {props.spells === 1 && <h2>Say "Hey Dear" and start talking...</h2>}

                </div>
            </div>
            <div className="floating-bottom-bar">
                {props.mic === true && <RiMicLine className="mic" onClick={props.micfn} />}
                {props.mic === false && <RiMicOffFill className="mic" onClick={props.micfn} />}
                <div>Developed by Venky</div>
            </div>
        </div >
    )
}

export default Boom
