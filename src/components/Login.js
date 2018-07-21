import React, { Component } from 'react' ;
import axios from 'axios' ;
import { Redirect } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

class Login extends Component{
    constructor(){
        super()
        this.onHide = this.onHide.bind(this);
        this.state = {
            forgot_pass: false,
            user_id: localStorage.getItem('data_login')
        }
    }
    onHide(event) {
        this.setState({forgot_pass: false});
    }

    componentDidMount(){

        // axios.get('http://localhost:3002/api/login/session')
        // .then((response_session) => {
        //     console.log(response_session)
        //     // localStorage.setItem('data', response_session.data)
        
        // });

        if(this.state.user_id === null){

            return (<Redirect to={'/login'} />)
        }else{
            return (<Redirect to={'/member'} userId={this.state.user_id} />)
        }

        // console.log(localStorage.getItem('data_login'))

    }

    login(){

        if(!this.refs.username.value && !this.refs.password.value){
            
            this.setState({login: 'Masukkan Username dan Pasword'})
                
        } else {
            var data_login = {
                logemail: this.refs.username.value,
                logpassword: this.refs.password.value
            }
            var url = 'http://deploytest.us.openode.io/api/login/';
            axios.post(url, data_login)
            .then((response_cari) => {
                // console.log(response_cari)
                // console.log(response_cari.data._id)
                if(response_cari.data._id){

                    this.setState({login: 'berhasil', user_id: response_cari.data._id })
                    localStorage.setItem('data_login', response_cari.data._id)

                } else {

                    this.setState({login: 'Username dan Password tidak terdaftar, Silahkan Daftar Member'})
                
                }
            });

            // this.setState({login_status:'Register Gagal...!!',formLogin: true});

        }
    }
    
    registrasi(){
        
        if(this.refs.password_registrasi.value === this.refs.password_konfirmasi.value){
            if(this.refs.nama_lengkap.value 
                && this.refs.email.value ){
                
                var data_reg = {

                    username: this.refs.nama_lengkap.value,
                    email: this.refs.email.value,
                    password: this.refs.password_registrasi.value

                }

                var url = 'http://deploytest.us.openode.io/api/login/register';
                axios.post(url, data_reg)
                .then((response_reg) => {
                    if(response_reg.data.status > 0){

                        this.setState({konfPass: 'Email yang anda masukkan sudah terdaftar'})
                        console.log(response_reg)
                        
                    }else{

                        this.setState({konfPass: 'Berhasil Registrasi, Cek email anda untuk Konfirmasi Pendataran'})
                        console.log(response_reg)
                                                
                    }

                    // console.log(response_reg)
                    // if(response_reg.data.length === 1){
                    //     this.setState({login: response_reg.data })
                    // } else {
                    //     this.setState({login: 'Username dan Password tidak terdaftar, Silahkan Daftar Member'})
                    
                    // }
                });

            } else {
                    
                this.setState({konfPass: 'Data Masih ada yang kosong'})
            }

        } else {
            this.setState({konfPass: 'Konfirmasi Password tidak cocok'})
        }

    }
    forgot_pass(event) {
        this.setState({forgot_pass: true});
    }


    render(){
        if(this.state.user_id !== null){

            return (<Redirect to={'/member'} userId={this.state.user_id} />)
        }

        return(
            <div>
                <section class="breadcrumbs-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="bread-content text-left">
                                    <h2>Login Member</h2>
                                    <ul>
                                        <li><a>Hom</a><span>/</span></li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="single-singe-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-xs-12 text-left col-sm-8 col-lg-6">
                                <h3>Masuk Member</h3>
                                <p>{ this.state.login } </p>
                                <p>{ this.state.match_login }</p>
                                <div class="form-group">
                                    <label for="exampleInputFile">Email</label>
                                    <input ref="username" type="email"  class="form-control" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile">Password</label>
                                    <input ref="password" type="password" class="form-control" placeholder="Password" />
                                </div>
                                {/* { this.state.username } */}
                                <div class="form-group">
                                    
                                    <Button label="Lupa Password" icon="pi pi-info-circle" onClick={() => this.forgot_pass()} />
                                </div>
                                <Dialog header="Lupa Password" visible={this.state.forgot_pass} width="500px" modal={true} minY={70} onHide={this.onHide} maximizable={true}>
                                    <div className="ui-inputgroup" style={{width: '100%'}}>
                                        <InputText placeholder="Alamat Email" style={{width: '100%'}} />
                                        <Button className="ui-inputgroup-addon" icon="fa fa-send" onClick={() => this.forgot_pass()} />
                                    </div>
                                    
                                </Dialog>

                                <button type="button" class="btn btn-default pull-right" onClick={() => this.login()}><i class="fa fa-sign-in"></i> Masuk</button>
                            </div>
                            <div class="col-md-9 col-xs-12 text-left col-sm-8 col-lg-6">
                                <h3>Daftar Member</h3>
                                {/* <p>{ this.state.login } </p> */}
                                <p>{ this.state.konfPass }</p>
                                <div class="form-group">
                                    <label for="exampleInputFile">Nama Lengkap</label>
                                    <input ref="nama_lengkap" type="text"  class="form-control" placeholder="Username" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile">Email </label>
                                    <input ref="email" type="email"  class="form-control" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile">Password</label>
                                    <input ref="password_registrasi" type="password" class="form-control" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputFile">Konfirmasi Password</label>
                                    <input ref="password_konfirmasi" type="password" class="form-control" placeholder="Konfirmasi Password" />
                                </div>
                                {/* { this.state.username } */}
                                
                                <button type="button" class="btn btn-default pull-right" onClick={() => this.registrasi()}><i class="fa fa-user"></i> Daftar Sekarang</button>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login ;