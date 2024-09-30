import React from 'react'
import ReactDOM from 'react-dom';
import Popup from '../components/Popup'

export default function Popups() {
    
    const [tryMeButton, setTryMeButton] = React.useState(false)

    const toggleButton = () => {
        setTryMeButton((prevState) => !prevState)
    }

    return (
        <>
            <div className='prop-options'>
                <h2 className='prop-options-title'>Popup Prop Options</h2>
                <div className='prop-options-text'>
                    <span>&#8594; </span>
                    <span className='red-text'>status="success"</span><span> (default status), </span>
                    <span className='red-text'>"info"</span><span>, </span>
                    <span className='red-text'>"error"</span><span>, </span>
                    <span className='red-text'>"warning"</span><br />
                    <span>&#8594; </span>
                    <span className='red-text'>location="top-right"</span><span> (default location), </span>
                    <span className='red-text'>"bottom-right"</span><span>, </span>
                    <span className='red-text'>"bottom-left"</span><span>, </span>
                    <span className='red-text'>"top-left"</span><br/>
                    <span>&#8594; </span>
                    <span className='red-text'>animation="slide"</span><span> (default animation), </span>
                    <span className='red-text'>"bounce"</span><span>, </span>
                    <span className='red-text'>"pulse"</span><span>, </span>
                    <span className='red-text'>"shake"</span><span>, </span>
                    <span className='red-text'>"none"</span><br/>
                    <span>&#8594; </span>
                    <span className='red-text'>time="4"</span><span> (default time in seconds), </span>
                    <span className='red-text'>"n"</span><span>(replace n with custom number of seconds)</span>
                </div>
            </div>
            <div className='popup-example'>
                <h2 className='example-title'>Popup Component Example</h2>
                <p className='example'> 
                    <span className='red-text'>{`<Popup status="success" header="Success" location="top-left">`}</span><br/>
                    <span className="indent">{`Custom Popup Message`}</span><br/>
                    <span className='red-text'>{`</Popup>`}</span>
                </p>
                <button className='popup-button' onClick={toggleButton}>Try Me!</button>
            </div>
            <div id="portal-root" className="top-left"></div>
            {tryMeButton && ReactDOM.createPortal(
                <Popup status="success" header="Success" location="top-left">Children</Popup>,
                document.getElementById('portal-root')
            )}
        </>
    )
}