import React from 'react'
import { Button } from 'semantic-ui-react'
import "./HeaderPage.scss"

export function HeaderPage(props) {
    const {title, btnTitle, btnClick, btnTitle2, btnClick2} = props;
  return (
    <div className='header-page-admin'>
        <h2>{title} </h2>
        
        <div>
            {btnTitle && (
                <Button poitive onClick={btnClick}>
                    {btnTitle}
                </Button>
            )}
            {btnTitle2 && (
                <Button poitive onClick={btnClick2}>
                    {btnTitle2}
                </Button>
            )}            
        </div>
    </div>
  );
}
