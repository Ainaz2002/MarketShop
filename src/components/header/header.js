import React from 'react';
import './header.css'
const Header = (props) => {
    const { setIphones, categoryList, iphones , categorysClick ,homeClick} = props
    return (
        <>
            <div className={'menu'}>
                <ul className="navbar">
                    <li><a href="#" onClick={homeClick}>Главная</a></li>
                    <li><a href="#">Cкидки</a></li>
                    <li>
                        <select name={''} id={''}>
                            <option value={''}>категории</option>
                            {categoryList.map((elem,index)=>{
                                return(
                                    <option onClick={()=> categorysClick(elem.id, elem.title)} key={index} value={''}>{elem}</option>
                                )
                            })}
                        </select>
                    </li>

                    <div className={'search'}>
                        <input type={"text"} placeholder={'  найти...'}/>
                        <button>Найти</button>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Header;