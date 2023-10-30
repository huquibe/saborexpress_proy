import React from 'react';
import "./AdminLayout.scss";

export  function ClientLayout(props) {
    const {children} = props;
  
  return (
    <div>
        <p>AdminLayout</p>

        {children}
    </div>
  )
}
