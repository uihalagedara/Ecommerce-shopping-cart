import React, { Component } from 'react'
import axios from 'axios'

export default class editPost extends Component {

    constructor(props){
        super(props);
    
        this.state={
            itemCode:"",
            description:"",
            unintPrice:"",
            qty:"",
            total:""

              //errors
             // errors:{},
              //error:{}
        }
      }

     /* formValidation = () =>{  
              const{order_id, cus_id, item_id, amount, total}=this.state;
                let isValid = true;        
                const errors ={};
                const error = {};        
               
                if(order_id.trim().length<4){ 
                error["OrderIDLength"]= "Order id must be in length 4 or higher";
                isValid=false;        }        
    
                if(!order_id.match(/^[O][A-Z]{1,}[0-9]{2,}$/)){
                error["OrderPattern"]="Order id should start with O then at least 1 uppercase letters and at least 3 numbers";
                isValid=false;        }        
    
                if(!order_id){
                error["OrderIDInput"] = "Order Id Field is EMPTY!";
                isValid=false;        }  
    
                if(cus_id.trim().length<4){ 
                error["OrderIDLength"]= "Order id must be in length 4 or higher";
                isValid=false;        }        
        
              
        
                if(!cus_id){
                error["OrderIDInput"] = "Order Id Field is EMPTY!";
                isValid=false;        }
    
                if(item_id.trim().length<4){ 
                error["OrderIDLength"]= "Order id must be in length 8 or higher";
                isValid=false;        }        
            
            
            
                if(!item_id){
                error["OrderIDInput"] = "Order Id Field is EMPTY!";
                isValid=false;        }
    
                if(!amount){
                errors["OrderIDInput"] = "Order Id Field is EMPTY!";
                isValid=false;        }
    
                 if(!total){
                errors["OrderIDInput"] = "Order Id Field is EMPTY!";
                isValid=false;        }
    
    
                 this.setState({errors:errors,error:error});       
                 return isValid;    }*/


      handleInputChange = (e) =>{
          const {name, value} = e.target;

          this.setState({
              ...this.state,
              [name]:value
          })
      }

      onSubmit = (e) =>{
          
          e.preventDefault();

          

          const id = this.props.match.params.id;
          const {itemCode, description, unitPrice, qty, total} = this.state

          const data={
            itemCode:itemCode,
            description:description,
            unitPrice:unitPrice,
            qty:qty,
            total:total
          }

          console.log(data)

          axios.put(`http://localhost:8000/cartpost/update/${id}`,data).then((res) =>{
              if(res.data.success){
                  alert("Post updated succesfully")
                  this.setState({
                    itemCode:"",
                    description:"",
                    unitPrice:"",
                    qty:"",
                    total:""
                  })
              }
          })
        
      }


    componentDidMount(){
       
        const id = this.props.match.params.id;
       
        axios.get(`http://localhost:8000/cartpost/${id}`).then((res) =>{
            
                this.setState({
                    itemCode:res.data.post.itemCode,
                    description:res.data.post.description,
                    unitPrice:res.data.post.unitPrice,
                    qty:res.data.post.qty,
                    total:res.data.post.total
                })
    
                console.log(this.state.post)
            
        }
        )}

        onDelete = (id) =>{
            axios.delete(`http://localhost:8000/post/delete/${id}`).them((res) =>{
              this.retrevePosts();
              alert("Deleted successfuly")
            })
          }

    render() {

        const{errors}=this.state;
        

        return (
            <div className="card" style={{borderRadius:'30px',marginTop:'10px',width:'100%',alignItems:'center'}}>
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>Item Code</label>
                    <input type="text" 
                    className="form-control"
                    name="itemCode"
                    placeholder="itemCode"
                    value={this.state.itemCode}
                    onChange={this.handleInputChange}/>

                    {/*{Object.keys(errors).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })} */}
                    
                </div>


                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>Description</label>
                    <input type="text" 
                    className="form-control"
                    name="description"
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}/>

                    {/*{Object.keys(errors).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })} */}
                    
                </div>


                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>price</label>
                    <input type="text" 
                    className="form-control"
                    name="unitPrice"
                    placeholder="price"
                    value={this.state.unitPrice}
                    onChange={this.handleInputChange}/>

                   {/*{Object.keys(errors).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })}*/}
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>qty</label>
                    <input type="text" 
                    className="form-control"
                    name="qty"
                    placeholder="quantity"
                    value={this.state.qty}
                    onChange={this.handleInputChange}/>

                   {/* {Object.keys(errors).map((key)=>{
                        return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })} */}
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:"5px"}}>total</label>
                    <input type="text" 
                    className="form-control"
                    name="total"
                    placeholder="total"
                    value={this.state.total}
                    onChange={this.handleInputChange}/>
                </div>

                

               <button className="btn btn-success" type="submit" style={{marginTop:"15px"}} onClick={this.onSubmit}>
                   <i className="far fa-check-square"></i>
                   &nbsp;update
               </button>

               <div><button className="btn btn-success"><a href='/shopping' style={{textDecoration:'none', color:'white'}}>Back to table</a></button></div>

            </form>
            </div>
        </div>
        )
    }
}
