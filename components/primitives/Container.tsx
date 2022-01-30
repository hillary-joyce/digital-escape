import React from 'react';
import { Button } from '..';
import { XIcon } from '..';

const outerContainerStyles = `
  bg-gray p-1 elevated-border
`
const innerContainerStyles = `
  bg-white sunken-border
`
const menuStyles = `
  px-0.5 py-1 flex
`
const topBarStyles = `
  w-fill h-7 bg-blue text-gray-light px-1 flex justify-between items-center
`

const Container = ({ hasMenu, title, width = 400, height, children, onDismiss }) => (
  <div className={outerContainerStyles} style={{ width: width, height: height }}>
    <div className={topBarStyles}><span>{title}</span><Button icon={<XIcon />} onClick={onDismiss}/></div>
    {hasMenu && 
      <div className={menuStyles}>
        <span>File</span>
        <span className="px-1">Edit</span>
        <span className="px-1">Search</span>
        <span className="px-1">Help</span>
      </div>}
    <div className={innerContainerStyles}>
      {children}
    </div>
  </div>
);

export default Container;