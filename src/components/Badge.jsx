import React from 'react'

export default function Badge({ color, shape, children }) {
    
    let classList = 'badge'
    classList += color ? ` ${color}` : ' gray'
    classList += shape ? ` ${shape}` : ' square'

    return (
        <div className={classList}>
            {children}
        </div>
    )
}