import './css/textbox.css'
import { FaArrowUp } from "react-icons/fa6";

function textbox({HandleKeyDown, SendMessage, setUserInputValue, inputRef}) {
  return (
    <div className="textbox--wrapper">
    <input ref={inputRef} type="text" className="textbox" placeholder='Message DuckGPT' onChange={(e) => setUserInputValue(e.target.value)} onKeyDown={HandleKeyDown}required/>
    <div title="Press to send message" className="textbox--send" onClick={() => SendMessage(inputRef.current)}><FaArrowUp /></div>
    </div>
    
  )
}

export default textbox