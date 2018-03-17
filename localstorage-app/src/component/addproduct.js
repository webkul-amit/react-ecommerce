import React, { Component } from 'react';


class AddProduct extends Component {
  constructor(props){
    super(props);
    this.AddNewProduct = this.AddNewProduct.bind(this);

  }
  
  AddNewProduct(evt){
      
      evt.preventDefault();
      const name = document.getElementById('productName').value;
      const price = document.getElementById('productPrice').value;
      const img = document.getElementById('productImage').value;
    
      if( name && parseInt( price ) && img ) {
          
        this.props.onAdd( name, price, img );
        
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productImage').value = '';

      } 

  }
  render() {

    return (
      <form onSubmit={this.AddNewProduct}>
        <div className="add-product-wrap">
          <h2 className="text-capitalize">Add new Product</h2>
        
          <input type="text" name="productName" id="productName" placeholder="Add product name" /> 
          <input type="text" name="productPrice" id="productPrice" placeholder="Add product price" /> 
          <input type="text" name="productImage" id="productImage" placeholder="Add product image name" /> 
          <button type="submit">Add Product</button>
          
        </div>
       </form>   
    )
  }
}

export default AddProduct;
