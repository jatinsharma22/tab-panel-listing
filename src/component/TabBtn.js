import React from 'react';
import {  Button } from "react-bootstrap";

function TabBtn({filterItem, menuList}) {
  return (
    <>
        <nav className='pb-4 justify-content-center d-flex'>
            <div className='tab_group'>
                {
                    menuList.map((curElem, id)=>{
                        return (
                            <Button className='border-top-0 border-start-0 border-end-0 bg-transparent text-dark rounded-0 fs-6' key={id} onClick={()=>filterItem(curElem)}>{curElem}</Button>
                        )
                    })
                }
           </div>
        </nav> 
    </>
  )
}

export default TabBtn
