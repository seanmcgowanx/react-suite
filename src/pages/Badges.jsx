import React from 'react'
import Badge from '../components/Badge'

/*

Badge Prop Options

color: 'gray'(default), 'red', 'yellow', 'green', 'blue', 'purple'
shape: 'square'(default), 'pill'
text: children

*/


export default function Badges() {
    return (
        <>
        <div className='prop-options'>
            <h2 className='prop-options-title'>Badge Prop Options</h2>
            <div className='prop-options-text'>
                <span>&#8594; </span>
                <span className='red-text'>color="gray"</span><span> (default color), </span>
                <span className='red-text'>"red"</span><span>, </span>
                <span className='red-text'>"yellow"</span><span>, </span>
                <span className='red-text'>"green"</span><span>, </span>
                <span className='red-text'>"blue"</span><span>, </span>
                <span className='red-text'>"purple"</span>
                <br/>
                <span>&#8594; </span>
                <span className='red-text'>shape="square"</span><span> (default), </span>
                <span className='red-text'>"pill"</span>
            </div>
        </div>
            <div className='badge-example'>
                <h2 className='example-title'>Badge Component Example</h2>
                <p className='example'> 
                    <span className='red-text'>{`<Badge color="green" shape="pill" >`}</span><br/>
                    <span className="indent">{`Custom Badge Text`}</span><br/>
                    <span className='red-text'>{`</Badge>`}</span>
                </p>
            </div>
            <div className='square-badges'>
                <h3 className='badges-title'>Square Badges</h3>
                <div className="badges">
                    <Badge>Custom Text</Badge>
                    <Badge color="red">Custom Text</Badge>
                    <Badge color="yellow">Custom Text</Badge>
                    <Badge color="green">Custom Text</Badge>
                    <Badge color="blue">Custom Text</Badge>
                    <Badge color="purple">Custom Text</Badge>
                </div>
            </div>
            <div className='pill-badges'>
                <h3 className='badges-title'>Pill Badges</h3>
                <div className='badges'>
                        <Badge shape="pill">Custom Text</Badge>
                        <Badge color="red" shape="pill">Custom Text</Badge>
                        <Badge color="yellow" shape="pill">Custom Text</Badge>
                        <Badge color="green" shape="pill">Custom Text</Badge>
                        <Badge color="blue" shape="pill">Custom Text</Badge>
                        <Badge color="purple" shape="pill">Custom Text</Badge>
                </div>
            </div>
        </>
    )
}