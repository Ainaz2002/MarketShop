import React, {useState} from 'react';
import './App.css'
import Header from "./components/header/header";
import iphone from './components/iphone/products (2).json'
import categoryList from './components/category/category'
import Product from "./components/product/product";


const App = (props) => {
    const [iphones, setIphones] = useState(iphone)


    const homeClick = () =>{
        setIphones(iphone)
    }
    const categorysClick = (id, title) =>{

    }


    return (
        <div className={'app'}>
            <Header iphones={iphones}
                    setIphones={setIphones}
                    categoryList={categoryList}
                    categorysClick={categorysClick}
                    homeClick={homeClick}
            />
            <Product iphones={iphones} setIphones={setIphones} />*/}
        </div>
    );
};

export default App;