// Write your code here
import './index.css'

const Message = props => {
  const {msg} = props
  const messageName = msg ? 'Please Login' : 'Welcome User'

  return (
    <h1 className="heading" onClick={msg}>
      {messageName}
    </h1>
  )
}

export default Message
