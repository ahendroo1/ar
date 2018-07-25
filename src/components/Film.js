import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card/';

class Film extends Component {

    constructor() {
        super();
        this.state = {
          movie: [],
        //   inputUser: '',
        }
    }

    componentDidMount() {
    
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=70019597619c8491d3d89055a06e87ee')
        .then((ambilData) => {
          console.log(ambilData.data.results);
          this.setState({
            movie: ambilData.data.results,
          })
        })
    }

    render() {

        const dataMovie = this.state.movie.map((item, index) => {
            var judul = item.title;
            var release = item.release_date;
            // var img = 'https://image.tmdb.org/t/p/w500'+item.backdrop_path;
            
            let header = <img alt="bjhsx" src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}/>;
            return (
                // <li key="index">
                // <h1>{title}</h1>
                // <p>{overview}</p>
                // {/* <img src={foto} alt=""/> */}
                // </li>
                
                <div className="ui-g-12 ui-md-6 ui-lg-3" key={index} >
                    <Card title={judul} subtitle={release} style={{width: '100%'}} className="ui-card-shadow " header={header}>
                        
                    </Card>
                </div>

            )
        })
      
        return (
            <div className="Movie">
                    <div class="container">
                        <center>
                            <h1>Offis Recomended Movie</h1>
                                {dataMovie}
                        </center>
                    </div>
            </div>
        );
    }
}

export default Film;