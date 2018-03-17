import React, { Component } from 'react';


class ProductItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit : false
    }
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  onDelete(){
    this.props.onDelete(this.props.name);
  }
  onEditSubmit(evt){
    evt.preventDefault();
    const name = document.forms["editForm"]["EProductName"].value;
    const price = document.forms["editForm"]["EProductPrice"].value;
    
    if( name && parseFloat( price ).toFixed(2)  ) {
        
      this.props.onEditSubmit( name, price, this.props.name );
      this.setState({
        isEdit:false
      });
      document.forms["editForm"]["EProductName"].value = '';
      document.forms["editForm"]["EProductPrice"].value = '';

    }
  }
  onEdit(){
    this.setState({isEdit:true});
  }
  render() {
    const { name, price, img, onDelete } = this.props;
    const imgUrl = require('../images/asus.png');
    
    return (
      <div key={name} className="productitems">      
        {
          this.state.isEdit 
          ? (
            <div>
              <form name="editForm" onSubmit={this.onEditSubmit}>            
                <div className="editor">
                  <img src={imgUrl} alt={name} />
                  <button className="DefProduct">x</button>                                                        
                  
                </div>
                <div className="product-wrap extraclass">
                  <input type="text" name="EProductName" defaultValue={name} ref={nameInput=>this.nameInput=nameInput}/> 
                  <input type="text" name="EProductPrice" defaultValue={parseFloat(price).toFixed(2)} ref={ priceInput => this.priceInput = priceInput} /> 
                </div>
                <button className="saveProduct">Save</button>                                                        
              </form>
            </div>
          ) 
          : (
            <div>
              <div className="editor">
                <img src={imgUrl} alt={name} />
                <button onClick={this.onEdit}>Edit</button>           
              </div>
              <div className="product-wrap">
                <h2>{name} </h2> 
                <span>{'$'+parseFloat(price).toFixed(2)} </span>
              </div>
              <button onClick={this.onDelete}>Delete</button>
            </div>
          )
        }
       </div>   
   
    )
  }
}

export default ProductItem;
