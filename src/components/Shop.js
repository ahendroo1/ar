import React, { Component } from 'react' ;
import axios from 'axios' ;
import Header_shop from './Header_shop'
import { Redirect } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

class Shop extends Component{
    constructor(){
        super();
        this.onHide = this.onHide.bind(this);
        this.state = {
            user_id: localStorage.getItem('data_login'),
            data_user:[],
            order_detail: false,
            
        }
    }
    onHide(event) {
        this.setState({order_detail: false});
    }

    componentDidMount(){

        axios.get('http://localhost:3002/api/user/' + this.state.user_id)
        .then((response_user) => {
            this.setState({data_user: response_user.data})
            // console.log(response_user)
            // localStorage.setItem('data', response_session.data)
        });

        // console.log(localStorage.getItem("data_login"))


    }

    show_order(){
        this.setState({order_detail: true})
    }

    render(){


        return(
            <div>
                
                <Header_shop />
                
                <section class="shop-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <h2 class="section-title">Teman Andro  <span>Merchandise</span></h2>
                                <p class="section-subtitle">Dapatkan sekarang T-shirt Teman Andro disini.</p>
                            </div>
                        </div>
                        <div class="row">

                            {/* <div id="product-crousel" class="owl-carousel owl-theme"> */}
                                <Dialog header="Politistst tshirt 1" visible={this.state.order_detail}  modal={true} minY={70} onHide={this.onHide} maximizable={true}>
                                    
                                    <div class="product-details">
                                        <div class="product-img">
                                            <img src="images/home1/tshirt1.png" alt="" />
                                        </div>
                                        <h4>2300000</h4>

                                    </div>
                                    <hr />
                                        Jumlah Beli : 
                                        <InputText placeholder="00" style={{width: '40%'}} type="text" keyfilter="pint"  />
                                           = 298980

                                        <Button  className="ui-inputgroup-addon pull-right" icon="fa fa-shopping-cart" onClick={() => this.forgot_pass()} />
                                    
                                    
                                    {/* <div className="ui-inputgroup" style={{width: '100%'}}>
                                        <InputText placeholder="Alamat Email" style={{width: '100%'}} />
                                        <Button className="ui-inputgroup-addon" icon="fa fa-send" onClick={() => this.forgot_pass()} />
                                    </div> */}
                                    
                                </Dialog>
                                <div class="col-md-4 col-xs-12 text-center" >
                                    <div class="product-details">
                                        <div class="product-img">
                                            <img src="images/home1/tshirt1.png" alt="" />
                                            <div class="filled-button" onClick={() => this.show_order()}>
                                                <i class="fa fa-shopping-cart"></i>
                                            </div>
                                            
                                        </div>
                                        <h4><a >Politistst tshirt</a></h4>
                                        <p>$15.00</p>
                                    </div>
                                </div>

                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Shop ;