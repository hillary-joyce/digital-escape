import React, {useState} from 'react';
import { Input, Button } from '.';

const outerContainerStyles = `
  bg-gray p-1 elevated-border pb-3
`
const innerContainerStyles = `
  flex flex-col
`
const menuStyles = `
  px-0.5 py-1 flex
`
const topBarStyles = `
  w-fill h-7 bg-blue text-gray-light px-1 flex justify-between items-center mb-1
`

const Passcode = ({ code, openFolder }) => {
  const [text, setText] = useState('');
  const [hasError, setHasError] = useState(false);

  const checkPasscode = () => {
    if(text === code){
      openFolder();
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
   <div className={outerContainerStyles}>
      <div className={topBarStyles}>Open Folder</div>
      <div className={innerContainerStyles}>
        <label>Folder Passcode:</label>
        <Input onChange={v => setText(v.target.value)} value={text} />
        <div className="py-1" />
        <Button onClick={checkPasscode} text="Submit" />
        {hasError && <div className="text-red">incorrect password</div>}
      </div>
   </div> 
  )
}

export { Passcode };