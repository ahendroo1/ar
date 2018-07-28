import React, { Component } from 'react' ;
import axios from 'axios' ;
import { Redirect } from 'react-router-dom';

class Chart extends Component{
    constructor(){
        super()
        this.state = {
            user_id: localStorage.getItem('data_login'),
            data_user:[]
        }
    }

    componentDidMount(){

        axios.get('http://localhost:3002/api/user/' + this.state.user_id)
        .then((response_user) => {
            this.setState({data_user: response_user.data})
            // console.log(response_user)
            // localStorage.setItem('data', response_session.data)
        });

        // console.log(localStorage.getItem("data_login"))

        if(this.state.user_id === null){

            return (<Redirect to={'/login'}/>)
        }

    }

    render(){

        if(this.state.user_id === null){

            return (<Redirect to={'/login'}/>)
        }

        return(
            <div>
                <section class="breadcrumbs-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="bread-content text-left">
                                    <h2>Member</h2>
                                    <ul>
                                        <li><a>Home</a><span>/</span></li>
                                        <li>Member</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="single-singe-area">
                    <div class="container">
                        <div class="row">
                            Cart page 
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Chart ;