import React, { memo } from 'react';
interface Props{
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
}
const Input = (props: Props) => {
    return (
        <input
        className='input__item' 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={e => props.setValue(e.target.value)} />
    );
}

export default memo(Input);
