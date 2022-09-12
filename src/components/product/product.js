import React from 'react';
import './product.css'
import ReactStars from "react-rating-stars-component/dist/react-stars";
const Product = ({iphones, setIphones}) => {
    return (
        <div>
                    <div className={'card'}>
                        {
                            iphones.map((elem)=>{
                                return(
                        <div className={'card-block'}>
                            <div className={'img-card'}>
                                <img src={elem.thumbnail}/>
                            </div>
                            <div className={'red'}></div>
                            <div className={'card-text'}>
                               <div className={'brand'}>
                                   <h2>{elem.brand}</h2>
                                   <h5>{elem.title}</h5>
                               </div>
                               <div className={'description'}>
                                   <p>{elem.description}</p>
                               </div>
                               <div className={'star'}>
                                   <ReactStars
                                       count={5}
                                       size={30}
                                       color={'#D53120'} />
                               </div>
                               <div className={'text-block'}>
                                   <div className={'text-in-block'}>
                                       <h3>{elem.discountPercentage}
                                           <br/>
                                           cкидкa</h3>
                                   </div>
                                   <div className={'text-in-block'}>
                                       <h3>{elem.price}$
                                           <br/>
                                           цена</h3>
                                   </div>
                               </div>
                            </div>
                        </div>
                                )
                            })
                        }

                    </div>
        </div>
    );
};

export default Product;