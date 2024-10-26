import React from 'react'
type Props = {
  color?:string;
};

const PlusIcon = ({color}:Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12H15" stroke={color ? color :"#707070"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9L12 15" stroke={color ? color : "#707070"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default PlusIcon