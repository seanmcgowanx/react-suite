import React from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function Banner({ status, header, children }) {

    let icon = <HiInformationCircle /> // icon defaults to neutral icon
    if (status === 'success') {
        icon = <FaCheckCircle />
    } else if (status === 'error') {
        icon = <FaCircleXmark />
    } else if (status === 'warning') {
        icon = <FaExclamationTriangle />
    } else if (status === 'neutral') {
        icon = <HiInformationCircle />
    }
    
    let classList = 'banner' // base styling for banner
    classList += status ? ` ${status}` : ' neutral' // banner defaults to neutral styling

    return (
        <div className={classList}>
            <div className={status ? `banner-icon ${status}-icon` : `banner-icon neutral-icon`}>{icon}</div>
            <h1 className={status ? `banner-header ${status}-header` : `banner-header neutral-header`}>{header}</h1>
            {children && <p className="banner-message">{children}</p>}
        </div>
    )
}