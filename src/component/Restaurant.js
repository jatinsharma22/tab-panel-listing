import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Menu from "./menuApi";
import MenuBox from "./MenuBox";
import Nabvar from "./TabBtn"

// console.log(uniqueList)

function Restaurant() {
  const uniqueList = [...new Set(Menu.map((curElem) => {
    return  curElem.category;
  })),"All"
];

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState (uniqueList);
  

  const filterItem=(category) =>{

    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem)=>{
          return curElem.category === category;
    })
    setMenuData(updatedList);
  };

  return (
    <>
      <Container>
        <Nabvar filterItem={filterItem} menuList={menuList}/>
        <MenuBox menuData={menuData} />
        <div className="d-flex pb-4 justify-content-center github">
          <a href="https://github.com/jatinsharma22/tab-panel-listing/tree/main" target="_blank"><img src="./images/github.svg" /></a>
        </div>
      </Container>
    </>
  );
}

export default Restaurant;
