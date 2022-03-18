import './ItemHomeScreen.css';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import Item from "../components/modules/CustomerPageModules/Stock/Item";


import {getItems as listItems} from '../redux/actions/itemActions';


const ItemHomeScreen = () => {


    const dispatch = useDispatch();

    const getItems = useSelector((state) => state.getItems);

    const {items,loading,error} = getItems;

  
    

    useEffect(()=>{
        dispatch(listItems());
    }, [dispatch]);



    return <div className="itemHomeScreen">
        <h1 class="jt --debug" style={{marginLeft:'800px'}}>
  <span class="jt__row">
    <span class="jt__text">Latest Items!</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Latest Items!</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Latest Items!</span>
  </span>
  <span class="jt__row jt__row--sibling" aria-hidden="true">
    <span class="jt__text">Latest Items!</span>
  </span>
</h1>
            <br/>
            &nbsp;&nbsp;
            <button className="btn btn-secondary"><i className="fas fa-shopping-cart"><a href="/cart" style={{textDecoration:'none',color:'black',fontWeight:'bolder',borderRadius:'8px'}}>
                <span>
                Cart<span className="cartLogo__badge">0</span></span></a></i></button>
        <br/><br/>
        <div className="itemHomeScreen__items">
            { loading ? (
                <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                 items.map((item) => <Item 
                    key ={item._id} 
                    itemId={item._id}
                    itemCode={item.itemCode}
                    unitPrice={item.unitPrice}
                    description={item.description}
                    color={item.color}
                    imageUrl={item.imageUrl}
                />)
            )}
        </div>
        </div>;
};

export default ItemHomeScreen;
