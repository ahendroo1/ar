import React, { Component } from 'react' ;
import axios from 'axios' ;
import Header_shop from './Header_shop'
// import { Redirect } from 'react-router-dom';
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
            data_barang: []
            
        }
    }

    onHide(event) {
        this.setState({order_detail: false});
    }

    componentDidMount(){

        axios.get('http://temanandro.us.openode.io/api/barang/show_data')
        .then((response_barang) => {
            console.log(response_barang)
            this.setState({data_barang: response_barang.data})
        });

        // console.log(localStorage.getItem("data_login"))


    }

    show_order(){
        this.setState({order_detail: true})
    }

    render(){


        const data_barang = this.state.data_barang.map((item, index) => {
            // var judul = item.title;
            // var release = item.release_date;
            // var img = 'https://image.tmdb.org/t/p/w500'+item.backdrop_path;
            
            // let header = <img alt="bjhsx" src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}/>;
            
            return (
                // <li key="index">
                // <h1>{title}</h1>
                // <p>{overview}</p>
                // {/* <img src={foto} alt=""/> */}
                // </li>
                
                <div key={index} class="col-md-4 col-xs-12 text-center" >
                    <div class="product-details">
                        <div class="product-img">
                            <img src={item.img_url} alt="" />
                            <div class="filled-button" onClick={() => this.show_order()}>
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                            
                        </div>
                        <h4><a>{item.nama_barang}</a></h4>
                        <p>{item.harga}</p>
                    </div>
                </div>

            )
        })

        return(
            <div>
                
                <Header_shop />

                {/* <Dialog key={index} header="Politistst tshirt 1" visible={this.state.order_detail}  modal={true} minY={70} onHide={this.onHide} maximizable={true}>
                                    
                    <div class="product-details">
                        <div class="product-img">
                            <img src={item.img_url} alt="" />
                        </div>
                        <h4>{item.harg}</h4>

                    </div>
                    <hr />
                        Jumlah Beli : 
                        <InputText placeholder="00" style={{width: '40%'}} type="text" keyfilter="pint"  />
                        = { item.harga }

                        <Button className="ui-inputgroup-addon pull-right" icon="fa fa-shopping-cart" onClick={() => this.forgot_pass()} />
                    
                    
                    
                </Dialog> */}
                
                <section class="shop-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <h2 class="section-title">Teman Andro  <span> M </span></h2>
                                <p class="section-subtitle">Dapatkan sekarang T-shirt Teman Andro disini.</p>
                            </div>
                        </div>
                        <div class="row">

                            {/* <div id="product-crousel" class="owl-carousel owl-theme"> */}
                                
                                { data_barang }

                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Shop ;