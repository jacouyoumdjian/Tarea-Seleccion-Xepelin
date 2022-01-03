import React, { Component } from 'react';
import '../App.css';

class Gsheet extends Component {
    render() {
        return (
            <div className="content-container">
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUcABwUareCqrvXtXj1xGYBDOcs5LKJTNVeNqRZF4u5kEmJGPJROjy2qZfOisFHLCaD82Dv_FIwjRL/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                className='gsheet-container'/>
            </div>
            
        );
    }
}

export default Gsheet;