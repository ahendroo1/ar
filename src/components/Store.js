import React, { Component } from 'react' ;
import axios from 'axios' ;
import { Redirect, Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Growl } from 'primereact/growl';

class Store extends Component{
    constructor(){
        super()
        this.state = {
            user_id: localStorage.getItem('data_login'),
            store_id: localStorage.getItem('id_store'),
            data_user:[],
            data_shop: [],
            data_order: [],
            delete_cart: false,
            confirm_delete: {}
        }
    }

    onHide(event) {
        this.setState({delete_cart: false});
    }

    componentDidMount(){

        axios.get('http://localhost:3002/api/store/data/cart/' + this.state.store_id)
        .then((response_shop) => {
            this.setState({data_shop: response_shop.data})
            console.log(response_shop)
            // console.log(store_id)
            // localStorage.setItem('data', response_session.data)
        });

        axios.get('http://localhost:3002/api/store/data/order/' + this.state.user_id)
        .then((response_order) => {
            this.setState({data_order: response_order.data})
            console.log(response_order)
            // console.log(store_id)
            // localStorage.setItem('data', response_session.data)
        });

        // console.log(localStorage.getItem("data_login"))

        if(this.state.user_id === null){

            return (<Redirect to={'/login'}/>)
        }
    }

    delete_cart(_id, nama_barang, harga, jumbel){

        this.setState({
            _id: _id,
            nama_barang: nama_barang,
            harga: harga,
            jumbel: jumbel,
            delete_cart: true})
    }

    delete_cart_server(){
        if(this.state._id && this.state.nama_barang && this.state.harga && this.state.jumbel){
            // this.growl.show({severity:'success', summary:'Keranjang', detail:'Data Berhasil di Hapus'});
            
            axios.get('http://localhost:3002/api/store/cart/delete/' + this.state._id)
            .then((res_delete_cart) => {
                // this.setState({data_delete_: response_shop.data})
                console.log(res_delete_cart.data.ok)
                this.onHide()
                this.setState({
                    _id: '',
                    nama_barang: '',
                    harga: '',
                    jumbel: '',    
                })
                
                this.componentDidMount()
                // console.log(store_id)
                // localStorage.setItem('data', response_session.data)
                this.growl.show({severity:'success', summary:'Keranjang', detail:'Data Berhasil di Hapus'});
                
            }).catch(() => {
                this.growl.show({severity:'error', summary:'Hapus Keranjang', detail:'Tidak ada data untuk di Hapus'});
            });

        } else {

            this.growl.show({severity:'error', summary:'Hapus Keranjang', detail:'Tidak ada data untuk di Hapus'});
                 
        }
    }

    checkout(){
        if(this.state.store_id){
            
        }else{
            this.growl.show({severity:'error', summary:'Selesai Order', detail:"Gagal menyelesaikan Order Anda"});
        }
    }

    render(){

        if(this.state.user_id === null){

            return (<Redirect to={'/login'}/>)
        }

        const show_keranjang = this.state.data_shop.map((item, index) => {
            var nama_barang = item.nama_barang;
            var harga = item.harga;
            var jumbel = item.jumbel ;
            // var img = 'https://image.tmdb.org/t/p/w500'+item.backdrop_path;
            
            return (

                // <tr key={index}>
                //     <td align="left">{ item._id }</td>
                //     <td align="left"> {nama_barang}</td>
                //     <td align="left" >{harga}</td>
                //     <td align="left" >{jumbel}</td>
                //     <td align="left" ><img alt="img" src={item.img_url} style={{width:'100px'}}/></td>
                // </tr>

                <div class="thumbnail col-lg-4 col-xs-12" key={index}>
                    <img src={item.img_url} alt="..."/>
                    <div class="caption">
                        <h3>{nama_barang}</h3>
                        <br />
                        <p class="text-left"> Harga : {harga} </p><br />
                        <p class="text-left"> Jumlah Beli : {jumbel}</p><br />
                        <p class="text-left"> Total Harga : {harga*jumbel}</p><br />
                        <p>
                            <button onClick={() => this.delete_cart(item._id, nama_barang, harga, jumbel)} class="btn btn-danger btn-xs pull-right" role="button"><i class="fa fa-trash-o"></i></button>
                        </p>
                    </div>
                </div>

            )
        })

    
        const show_order = this.state.data_order.map((item, index) => {
            
            var status_pembayaran = item.status_pembayaran;
            var status_pengiriman = item.status_pengiriman;
            if(item.status_pengiriman === 0 && item.status_pembayaran === 0){
                var tracking = <button class="btn btn-default btn-xs">Belum di Kirim</button>
            } else if(item.status_pengiriman === 0 && item.status_pembayaran === 1) {
                var tracking = <button class="btn btn-warning btn-xs">Proses Pengiriman</button>
            } else if (item.status_pengiriman === 1 && item.status_pembayaran === 1){
                var tracking = <button class="btn btn-success btn-xs">Dikirim</button>
            } else {
                var tracking = <button class="btn btn-default btn-xs">Batal Order</button>
            }

            if(item.status_pembayaran === 0){
                var payment = <button class="btn btn-default btn-xs">Menunggu Pembayaran</button>
            } else if(item.status_pembayaran === 1){
                var payment = <button class="btn btn-success btn-xs">Konfirmasi</button>
            } else if(item.status_pembayaran === 2){
                var payment = <button class="btn btn-success btn-xs">Lunas</button>
            } else {
                var payment = <button class="btn btn-default"> Batal Order</button>
            }

            // var img = 'https://image.tmdb.org/t/p/w500'+item.backdrop_path;
            
            return (

                <tr key={index}>
                    <td align="left">{item._id}</td>
                    <td align="left" >{payment}</td>
                    <td align="left" >{tracking}</td>
                    <td>{item.tgl_store}</td>
                    <td>
                        <button class="btn btn-primary btn-sm"> Detail Order</button>
                    </td>
                </tr>

            )
        })

        return(
            <div>

                <Growl ref={(el) => this.growl = el}></Growl>
                <Dialog header="Hapus Barang" visible={this.state.delete_cart} width="350px" modal={true} minY={70} onHide={() => this.onHide()} maximizable={true}>
                    
                    <h4>{this.state.nama_barang}</h4>
                    <br />
                    <p class="text-left">Harga : {this.state.harga}</p>
                    <p class="text-left">Jumlah Beli : {this.state.jumbel}</p>

                    <hr />
                    <button class="btn btn-danger btn-xs pull-right" onClick={() => this.delete_cart_server()}><i class="fa fa-trash-o"></i> Hapus</button>
                </Dialog>
                <section class="breadcrumbs-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="bread-content text-left">
                                    <h2>Bag Store</h2>
                                    <ul>
                                        <li><a>Home</a><span>/</span></li>
                                        <li>Store</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="single-singe-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                { show_keranjang }
                            </div>
                            <hr />
                            <div class="col-lg-12">
                                <button class="btn btn-primary pull-right" onClick={() => this.checkout()}><i class="fa fa-cart-arrow-down"></i> Selesaikan Order</button>
                                <Link to="/shop" class="btn btn-warning pull-left"><i class="fa fa-cart-plus"></i> Tambah Keranjang</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="breadcrumbs-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="bread-content text-left">
                                    <h2>Order Store</h2>
                                    <ul>
                                        <li><a>Home</a><span>/</span></li>
                                        <li>Store</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="single-singe-area">
                    <div class="container">
                        <div class="row">
                        <table class="table table-responsive">
                            <thead >
                                <th>ID Order</th>
                                <th>Status Payment</th>
                                <th>Status Pengiriman</th>
                                <th>Tanggal Order</th>    
                                <th>Tools</th>       
                            </thead>
                        
                            <tbody>
                                { show_order }
                            </tbody>
                        </table>
                        {/* <button class="btn btn-primary" onClick={() => this.logout()}>  Keluar </button> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Store ;