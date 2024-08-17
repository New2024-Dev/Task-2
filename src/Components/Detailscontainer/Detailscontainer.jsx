import "./Detailscontainer.css"
import Carticon from '/assets/Images/icon-cart.svg'

function Detailscontainer(){
    return(
        <div id="detcont">
<label id="perfum">PERFUME</label>
<h1 id="header">Gabrille Essence Eau De Parfum</h1>
<p id="parg">A floral, solar and voluptuos a floral, solar and voluptuos a floral, solar and voluptuos a floral, solar and voluptuos a floral, solar and voluptuos</p>
  <div id="pricedev">
    <label id="pric1">$149.99</label>
    <label id="discount">
        <s>$169.99</s>
        </label>
    </div> 
    <button id="cart">
        <img src={Carticon}></img>
       <span>Add to cart</span>
        </button>     
        
        </div>
    )
}

export default Detailscontainer