import React, { useRef, useEffect } from 'react';

const ProgressBar = ({ complete, total }) => {
  const completeRef = useRef();

  useEffect(() => {
    if (completeRef && completeRef.current){
      completeRef.current.style.width =  `${complete/total * 100}%`
    }
  }, [complete, total]);

  const containerStyles = `
    w-32 border-2 border-black h-6 p-0.5
  `
  const completionStyles = `
    h-full
    bg-blue
  `
  return (
    <div className={containerStyles}>
      <div className={completionStyles} ref={completeRef} />
    </div>
  )
}

export { ProgressBar }