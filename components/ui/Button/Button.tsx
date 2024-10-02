import React, { memo, PropsWithChildren } from 'react';

interface Props{
    onClick: () => void;
}
const Button: React.FC<PropsWithChildren <Props>> = ({onClick,children}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default memo(Button);
