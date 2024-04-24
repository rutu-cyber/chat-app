import {BsSend} from 'react-icons/bs'

const MessageInput = () => {
  return (
    <from className="px-4 my-3">
        <div className="w-full relative">
            <input type="text"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                placeholder="Send a message"
            />
            <button type="text" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend/>
            </button>
        </div>
    </from>
  )
}

export default MessageInput