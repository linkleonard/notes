import React from 'react';

const Link = ({ children, ...props }) => (
    <a href="#/" { ...props }>{ children }</a>
)

export default Link;
