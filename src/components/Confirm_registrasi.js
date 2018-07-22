import React, { Component } from 'react' ;
import axios from 'axios' ;
import { Redirect } from 'react-router-dom' ;

class Confirm_login extends Component{

    constructor(){
        super()
        this.state = {
            user_id: localStorage.getItem('data_login'),
            res_confirm: []
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        
        axios.get('http://localhost:3002/api/login/confirm_registrasi/' + params._id + '/' + params.pass)
        .then((response_confirm) => {

            this.setState({res_confirm: response_confirm.data})
            console.log(response_confirm)
            // console.log(response_user)
            // localStorage.setItem('data', response_session.data)
        });


        if(this.state.user_id !== null){

            return (<Redirect to={'/member'}/>)
        }

    }

    render(){

        if(this.state.user_id !== null){

            return (<Redirect to={'/member'}/>)
        }
        
        return(
            <div>
                <section class="breadcrumbs-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="bread-content text-left">
                                    <h2>Konfirmasi Aktivasi Akun</h2>
                                    <ul>
                                        <li><a>Home</a><span>/</span></li>
                                        <li>Konfirmasi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
 
                <section class="single-singe-area">
                    <div class="container">
                        <div class="row">

                            {this.state.res_confirm.status === 0
                                ? ' Terimakasih, Akun anda sudah Terverifikasi' 
                                : ' Silahkan Cek email anda untuk Verifikasi Akun '
                            }

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Confirm_login ;