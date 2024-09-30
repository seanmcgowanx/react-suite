import React from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function Popup({ status, header, location, children }) {

    let icon = <FaCheckCircle /> // icon defaults to success icon
    if (status === 'info') {
        icon = <HiInformationCircle />
    } else if (status === 'error') {
        icon = <FaCircleXmark />
    } else if (status === 'warning') {
        icon = <FaExclamationTriangle />
    }  else if (status === 'success') {
        icon = <FaCheckCircle /> 
    } 

    let classList = 'banner animated slideInRIght' // base styling for banner
    classList += status ? ` ${status}` : 'success' // banner defaults to success styling

    return (
        <>
        <div className={classList}>
            <div className={status ? `banner-icon ${status}-icon` : `banner-icon success-icon`}>{icon}</div>
            <h1 className={status ? `banner-header ${status}-header` : `banner-header success-header`}>{header}</h1>
            {children && <p className="banner-message">{children}</p>}
        </div>
        </>
    )
}