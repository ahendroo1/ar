import React, { Component } from 'react' ;
import axios from 'axios' ;
// import Header_shop from './Header_shop';
// import { Redirect } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
// import { InputText } from "primereact/inputtext";
import { Growl } from 'primereact/growl';

class Shop extends Component{
    constructor(){
        super();
        this.onHide = this.onHide.bind(this);
        this.state = {
            user_id: localStorage.getItem('data_login'),
            store_id: localStorage.getItem('id_store'),
            data_user:[],
            order_detail: false,
            data_barang: [],
            data_barang_detail: [],
            buttonState:''
        }
    }

    onHide(event) {
        this.setState({order_detail: false});
    }

    componentDidMount(){
        // console.log('data didmount')

        axios.get('http://localhost:3002/api/barang/show_barang')
        .then((response_barang) => {
            console.log(response_barang)
            this.setState({data_barang: response_barang.data.reverse()})
        });
        // axios.get('http://localhost:3002/api/store/data/cart/' + this.state.store_id )
        // .then((data_store) => {
        //     console.log(data_store);
        // })
        // console.log(this.state.store_id)
        // console.log(localStorage.getItem('data_login'))
        // console.log(localStorage.getItem("data_keranjang"))
    }

    setLocalstorage(){
        localStorage.setItem('id_store', this.state.data_add_cart._id);
        // console.log(this.state.data_add_cart._id)
    }

    show_order(barang){
        if(this.state.data_barang_detail !== []){
            this.setState({data_barang_detail: barang, order_detail: true})
        } else {
            this.setState({data_barang_detail: []})
        }
    }

    add_cart = () => {

        if (this.state.user_id === null) {
            // this.growl.show({severity:'danger', summary:'Login', detail:'Silahkan Masuk atau Daftar untuk melakukan Order'});
            window.location.href = 'login';

        } else {

            if(!this.refs.jumbel.value){
                this.growl.show({severity:'error', summary:'Keranjang', detail:'Masukkan Jumlah Beli'});
                   
            }else{

                axios.post('http://localhost:3002/api/store/cart', {

                    user_id: this.state.user_id,
                    nama_barang: this.state.data_barang_detail.nama_barang,
                    harga: this.state.data_barang_detail.harga,
                    size: this.refs.sz.value,
                    jumlah_beli: this.refs.jumbel.value,
                    img_url: this.state.data_barang_detail.img_url
                
                }).then((response_cart) => {

                    // console.log(response_cart)
                    this.growl.show({severity:'success', summary:'Keranjang', detail:'Berhasil di tambahkan ke Keranjang'});
                    // localStorage.setItem('id_store', response_cart.data._id);
                    this.setState({order_detail: false, data_add_cart:response_cart.data})
                    this.setLocalstorage()

                }).catch((err) => {
                    console.log(err)
                });

            }
        }
    }

    render(){

        function convertToRupiah(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }

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
                            <div class="filled-button" onClick={() => this.show_order(item)}>
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                        </div>
                        <h4><a>{item.nama_barang}</a></h4>
                        <p>{convertToRupiah(item.harga)}</p>
                    </div>
                </div>

            )
        })

        return(
            <div>
                {/* <Header_shop /> */}
                <Growl ref={(el) => this.growl = el}></Growl>
                <Dialog header={this.state.data_barang_detail.nama_barang} visible={this.state.order_detail}  modal={true} minY={70} onHide={this.onHide} maximizable={true}>
                    <div class="product-details">

                        <div class="product-img">
                            <img src={this.state.data_barang_detail.img_url} alt="" />
                        </div>
                        <h4>{this.state.data_barang_detail.nama_barang}</h4>

                    </div>
                    <hr />
                    <select className="form-control" ref='sz' >
                        <option value="0">Tidak ada size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select><br />
                        Jumlah Beli :
                        <input ref="jumbel" placeholder="00" style={{width: '40%'}} type="number"   />
                        = { convertToRupiah(this.state.data_barang_detail.harga ? this.state.data_barang_detail.harga : 0 ) }

                        <Button className="ui-inputgroup-addon pull-right" icon="fa fa-shopping-cart" onClick={() => this.add_cart()} />
                    
                </Dialog>
                
                <section class="shop-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <h2 class="section-title">Teman Andro  <span> Merchandise </span></h2>
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