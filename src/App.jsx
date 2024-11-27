import Textbox from "./textbox"
import { useState, useRef, useCallback } from "react"
import Message from "./message";
import Nav from "./Nav";

function App() {
  const [isLongUi, setIsLongUi] = useState(false);
  const [userInputValue, setUserInputValue] = useState('')
  const [messages, setMessages] =  useState([]);
  const [canSendMessage, setCanSendMessage] = useState(true);

  const punctuation = ['!', '...', ',', '.', ' -', ' 🦆', 'y', 'ing']
  
  const inputRef = useRef(null)
  const messageWrapperRef = useRef(null)

  const SetLongUi = () => setIsLongUi(true);

  const ScrollDown = useCallback(() => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop = messageWrapperRef.current.scrollHeight;
    }
  }, []); 

  const CreateRandomText = () => {
    //random piece of text from 0 - 100 words
    const length = Math.floor(Math.random() * 34 + 1)
    let output = ""
    for(let i = 0; i < length; i++){
      output += " qu"
      for(let i = 0; i < Math.random() * 10; i++){
        output += "a"
      }
      output += "ck"
      if(Math.random() < .35){ //1 in ? for punc
        output += punctuation[punctuation.length * Math.random() | 0]
      }
    }
    return output
  }

  const HandleKeyDown = (event) => {
    if(event.key == 'Enter'){
      SendMessage(inputRef.current)
    }
  }

  const SendMessage = (inputbox) => {
    if(!canSendMessage) return;
    setCanSendMessage(false);
    SetLongUi()

    inputbox.value = ''
    setMessages([...messages, {text: userInputValue, sender: "user"}])

    setMessages((prev) => [...prev, {text: CreateRandomText(), sender: "ai"}])
    setTimeout(() => {
      setCanSendMessage(true)
    }, 1000)
  }

  return (
    <>
    <Nav />
    <section ref={messageWrapperRef} className="app--messages">
      {messages.map((message, index) => {
        return <Message key={index} ScrollDown={ScrollDown} text={message.text} sender={message.sender}/>
      })}
    </section>
    
    <div className={`flex flex-col justify-content-center app--textbox ${isLongUi ? 'app--textbox__bottom' : ''}`}>
      <h1 className={isLongUi ? `invisible` : ``}>What can I help with?</h1>
      <Textbox inputRef={inputRef} SendMessage={SendMessage} setUserInputValue={setUserInputValue} HandleKeyDown={HandleKeyDown}/>
      {/* <div className={isLongUi ? `invisible` : ``} >tags</div> */}
    </div>
    <span className="app--bottom-text">By messaging DuckGPT, you agree to our <u>Terms</u> and have read our <u>Privacy Policy</u>.</span>
    </>
  )
}

export default App