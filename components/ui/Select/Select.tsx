import React, { memo } from 'react';

interface Option{
    value: string;
    name: string;
}
interface Props{
    defaultValue: string;
    options: Option[];
    value: string;
    onChange: (e: string) => void; // refactor
}
const Select = (props: Props) => {
    
    return (
        <select value={props.value} onChange={(e) => props.onChange(e.target.value)} >
            <option disabled value="">{props.defaultValue}</option>
            {props.options.map(item => (
                <option key={item.name}  value={item.value}>{item.name}</option>
            ))}
        </select>
    );
}

export default memo(Select);
