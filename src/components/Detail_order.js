

import React, { Component } from 'react' ;
import axios from 'axios' ;
// import Header_shop from './Header_shop';
// import { Redirect } from 'react-router-dom';
// import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
// import { InputText } from "primereact/inputtext";
// import { Growl } from 'primereact/growl';

class Detail_order extends Component{
    constructor(){
        super();
        this.state = {
            user_id: localStorage.getItem('data_login'),
            store_id: localStorage.getItem('id_store'),
            detail_order: localStorage.getItem('id_detail_order'),
            detail_store: [],
        }
    }

    componentDidMount(){
        console.log(this.state.detail_order)
        axios.get('http://androrohmana.us.openode.io/api/store/data/cart/' + this.state.detail_order)
        .then((response_order) => {
            this.setState({detail_store: response_order.data.reverse()})
            console.log(response_order)
            // console.log(store_id)
            // localStorage.setItem('data', response_session.data)
        });
    }

    back_store(){
        window.location.href = 'store'
    }

    render(){

        function convertToRupiah(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }

        var numb = 1 ;
        const show_keranjang = this.state.detail_store.map((item, index) => {
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
                        <h3>{numb++}. { nama_barang }</h3>
                        <br />
                        <p class="text-left"> Harga : {convertToRupiah(harga)} </p><br />
                        <p class="text-left"> Jumlah Beli : {jumbel}</p><br />
                        <p class="text-left"> Total Harga : {convertToRupiah(harga*jumbel)}</p><br />
                        
                    </div>
                </div>
            )
        })
        // var tobay = 0;
        // const tot = this.state.detail_store.map((item, index) => {
        //     var tobay = +(item.harga*item.jumbel);
        //     return tobay;
        // })
 
        
        // console.log(totalNumber); // hasilnya adalah 15
        var total_bayar = 0;
        var total_item = 0;
        
        for(var i=0;i<this.state.detail_store.length;i++){

                total_bayar += this.state.detail_store[i].total_harga 
                total_item += this.state.detail_store[i].jumbel 
        }

        return(
            <div>
                <section class="shop-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <h2 class="section-title">Detail  <span> Order </span></h2>
                                <p class="section-subtitle">Detail Order </p>
                            </div>
                        </div>
                        <br />
                        <button onClick={() => this.back_store()} class="btn btn-default btn-sm pull-left"><i class="fa fa-arrow-left"></i> Kembali</button>
                            
                            <hr />
                        <div class="row">
                            
                            <div class="col-lg-12">
                                { show_keranjang }
                            </div>
                            <br />
                            <div class="col-lg-12">
                                <div class="pull-right">
                                    <h4>Jumlah Order Item: <b>{ total_item }</b></h4>
                                    <br />
                                    <h4>Total Bayar : <b>{ convertToRupiah(total_bayar) }</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Detail_order ;