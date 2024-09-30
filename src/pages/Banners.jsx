import React from 'react'
import Banner from '../components/Banner'

/*

Banner Prop Options

status: 'neutral'(default), 'success', 'error', 'warning'
text: children

*/

export default function Banners() {
    return (
        <>
            <div className='prop-options'>
                <h2 className='prop-options-title'>Banner Prop Options</h2>
                <div className='prop-options-text'>
                    <span>&#8594; </span>
                    <span className='red-text'>status="neutral"</span><span> (default status), </span>
                    <span className='red-text'>"success"</span><span>, </span>
                    <span className='red-text'>"error"</span><span>, </span>
                    <span className='red-text'>"warning"</span><br/>
                    <span>&#8594; </span>
                    <span className='red-text'>header="Your custom header"</span><span> (no default header)</span>
                </div>
            </div>
            <div className='banner-example'>
                <h2 className='example-title'>Banner Component Example</h2>
                <p className='example'> 
                    <span className='red-text'>{`<Banner status="success" header="Congratulations!">`}</span><br/>
                    <span className="indent">{`Custom Banner Message`}</span><br/>
                    <span className='red-text'>{`</Banner>`}</span>
                </p>
            </div>
            <h3 className='banners-title'>Multi-Line (Component with Children)</h3>
            <div className='multi-line-banners'>
                <div className='banners'>
                    <Banner header="Update available">
                    This is an example of a custom banner message
                    </Banner>
                    <Banner status="success" header="Congratulations!">
                    This is an example of a custom banner message
                    </Banner>
                    <Banner status="error" header="There is a problem with your application">
                    This is an example of a custom banner message
                    </Banner>
                    <Banner status="warning" header="Attention">
                    This is an example of a custom banner message
                    </Banner>
                </div>
            </div>
            <div className='single-line-banners'>
                <h3 className='banners-title'>Multi-Line (Component with No Children)</h3>
                <div className='banners'>
                        <Banner header="Update available"></Banner>
                        <Banner status="success" header="Congratulations!"></Banner>
                        <Banner status="error" header="There is a problem with your application"></Banner>
                        <Banner status="warning" header="Attention"></Banner>
                </div>
            </div>
        </>
    )
}