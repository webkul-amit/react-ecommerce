import React, { Component } from 'react';
import Header from './component/header';
import ProductItem from './component/productitem';
import AddProduct from './component/addproduct';
const products = [
  {
    name: 'Apple',
    price : 23.00,
    img: 'apple.png'
  },{
    name: 'shorts',
    price : 123.00,
    img: 'capree.png'
  },
  {
    name: 'Blazer',
    price : 232.00,
    img: 'blazer.png'
  },{
    name: 'jeans',
    price : 223.00,
    img: 'jeans.png'
  },{
    name: 'Laptop',
    price : 2223.00,
    img: 'laptop.png'
  },{
    name: 'Crowd',
    price : 12113.00,
    img: 'crowd.png'
  },{
    name: 'Jacket',
    price : 4523.00,
    img: 'jaket.png'
  },{
    name: 'Asus',
    price : 313.00,
    img: 'asus.png'
  }

];

localStorage.setItem('products',JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  state = {
    products:JSON.parse( localStorage.getItem('products') )
  }
  componentWillMount() {
    const products = this.getProducts(); 
    this.setState({products})
  }
  onDelete(name){
    const products = this.getProducts();
    const filtered = products.filter( product => {
        return product.name !== name;
    });
   
    this.setState({products:filtered});
  }

  onAdd( name, price, img ) {
    // console.log(name);
    const new_product = {
      name: name,
      price: price,
      img: img
    }
    const products = this.getProducts();
    products.push(new_product);
    
    this.setState({products:products});
  }

  onEditSubmit( name, price, orignalName ) {
    
    const products = this.getProducts();
    const filteredProducts = products.map( product => {
      if( product.name == orignalName ) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
   
    this.setState({products:filteredProducts});
  }

  getProducts(){
    return this.state.products;
  }

  render() {
    
    return (

      <div className="App">
        
        <Header />    
        <div className="container">
        
          <div className="row">
            <div className="col-md-12">
                <div className="add-new-product">
                  <AddProduct
                  onAdd={this.onAdd}
                  />
                </div>
            </div>
          </div>

          <div className="row">
           <div className="col-md-12">
            {
              this.state.products.map( product => {
                return (
                  <ProductItem
                    key={product.name}
                    {...product}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                    onAdd={this.onAdd}
                  />        
                )
              })
            }
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
