import React from 'react';

interface Props{
    open: boolean;
    setOpen: (value: boolean) => void;
    children?: React.ReactNode;
}
const Modal = (props: Props) => {
    return (
        props.open ? (
            <div className='overlay' onClick={() => props.setOpen(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        ) : null
    );
}

export default Modal;
