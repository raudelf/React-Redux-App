import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const CatImg = (props) => {
        
    return (
        <div className='imgContainer'>
        {props.error ? (<div className='errorMssg'>{props.error}</div>) : (<img className={`${props.catImg ? 'catImg' : ''}`} src={props.catImg}/>)}   
        </div>
    )
}

const mapStateToProps = state => {
    return { state,
        catImg: state.catImg,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(CatImg);