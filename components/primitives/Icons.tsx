import React from 'react';


const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1.76777" y1="2.23223" x2="42.3449" y2="42.8093" stroke="black" strokeWidth="5"/>
    <line x1="2.23223" y1="42.8094" x2="42.8093" y2="2.2323" stroke="black" strokeWidth="5"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="50" height="45" viewBox="0 0 73 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 61V13.4722L11.8795 3H33.6747L42.5542 13.4722H70V61H3Z" fill="#FCE516"/>
    <path d="M3 13.4722V61H70V13.4722H42.5542M3 13.4722H42.5542M3 13.4722L11.8795 3H33.6747L42.5542 13.4722" stroke="black" strokeWidth="5"/>
  </svg>
)

const MailIcon = () => (
  <svg width="50" height="35" viewBox="0 0 73 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 51V3H70V51H3Z" fill="#FFFCFC"/>
    <path d="M3 3V51M3 3H70M3 3L26.1818 23.0214M3 51H70M3 51L26.1818 23.0214M70 51V3M70 51L47.5 23.0214M70 3L47.5 23.0214M47.5 23.0214L37 32.3647L26.1818 23.0214" stroke="black" strokeWidth="5"/>
  </svg>
)

const GameIcon = () => (
  <svg width="50" height="50" viewBox="0 0 73 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6129 67H3V34.4576L11.375 17.1017H18.7031V3H30.7422V17.1017H42.9839V3H54.871V17.1017H60.2742L70 34.4576V67H48.3871V50.7288L42.9839 45.3051H30.7422L24.6129 50.7288V67Z" fill="black" stroke="black" strokeWidth="5"/>
  </svg>
)

const FileIcon = () => (
  <svg width="62" height="78" viewBox="0 0 62 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 75V3H41.1111L59 21.2069V75H3Z" fill="white"/>
    <path d="M59 21.2069V75H3V3H41.1111M59 21.2069H41.1111V3M59 21.2069L41.1111 3" stroke="black" strokeWidth="5"/>
  </svg>
)
export {XIcon, FolderIcon, MailIcon, GameIcon, FileIcon};
