import React from 'react';

const Title = ({children , className}) => {
    return <p className={`text-2xl text-[#07254A] font-[450] p-4 ps-0 pb-2 underline decoration-[#9C1E2E]  underline-offset-8 ${className}`} > {children}</p>
};

export default Title;