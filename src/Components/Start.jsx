import React,{useRef} from 'react'

export default function Start({setUser}) {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value&&setUser(inputRef.current.value);
    }
    return (
        <div className='start'>
            <input type="email" className="startInput"placeholder='Enter your email' ref={inputRef} />
            <button className='btn' onClick={ handleClick}>Start</button>
        </div>
    )
}
