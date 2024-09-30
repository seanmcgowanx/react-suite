import React from 'react';
import { AiOutlineDeploymentUnit } from "react-icons/ai";


export default function Card({ hover, icon, color, title, children }) {

    const defaultIcon = <AiOutlineDeploymentUnit />
    let iconToUse = ""
    if (!icon || icon === "default") {
        iconToUse = defaultIcon
    } else {
        iconToUse = icon
    }

    return (
        <div className={hover ? "card card-hover" : "card"}>
            {icon && <div className={color ? `${color} card-icon` : `royal card-icon`}>{iconToUse}</div>}
            {title && <h1 className='card-title'>{title}</h1>}
            {children && <p className='card-message'>{children}</p>}
        </div>
    )
}  