import React from 'react'
import Card from '../components/Card'

/*

Card Prop Options

hover: true, false(default)
icon: 'default', (src)
title: (string)
color: 'royal'(default), 'silver', 'fire', 'forest', 'watermelon', 'dark'
text: children

*/

export default function Cards() {
    return (
        <>
        <div className='prop-options'>
            <h2 className='prop-options-title'>Card Prop Options</h2>
            <div className='prop-options-text'>
                <span>&#8594; </span>
                <span className='red-text'>icon="default"</span><span> (default icon),</span>
                <span className='red-text'>"./image-path"</span><span> (replace with the path to your icon image)</span><br/>
                <span>&#8594; </span>
                <span className='red-text'>color="royal"</span><span> (default color), </span>
                <span className='red-text'>"silver"</span><span>, </span>
                <span className='red-text'>"fire"</span><span>, </span>
                <span className='red-text'>"forest"</span><span>, </span>
                <span className='red-text'>"watermelon"</span><span>, </span>
                <span className='red-text'>"dark"</span><br/>
                <span>&#8594; </span>
                <span className='red-text'>title="Your Custom Title"</span><span> (no default title)</span><br/>
                <span>&#8594; </span>
                <span className='red-text'>hover="false"</span><span> (default), </span>
                <span className='red-text'>"true"</span>
            </div>
        </div>
        <div className='card-example'>
            <h2 className='example-title'>Card Component Example</h2>
            <p className='example'> 
                <span className='red-text'>{`<Card icon="./image-path" color="fire" title="Easy Deployment" hover >`}</span>
                <br/>
                <span className="indent">{`Custom Card Body Text`}</span><br/>
                <span className='red-text'>{`</Card>`}</span>
            </p>
        </div>
        <div className="card-flex">
            <div className='cards-default'>
                    <h3 className="cards-title">No Hover</h3>
                    <Card icon="default" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="silver" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="fire" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="forest" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="watermelon" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="dark" title="Easy Deployment" >
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                </div>
                <div className='cards-hover'>
                    <h3 className="cards-title">Hover</h3>
                    <Card icon="default" title="Easy Deployment" hover>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="silver" title="Easy Deployment" hover>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="fire" title="Easy Deployment" hover>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="forest" title="Easy Deployment" hover>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="watermelon" title="Easy Deployment" hover>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                    <Card icon="default" color="dark" title="Easy Deployment" hover>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                </div>
            </div>
        </>
    )
}