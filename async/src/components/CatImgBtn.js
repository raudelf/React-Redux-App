import React from 'react';
import { connect } from 'react-redux';
import { getCats } from '../actions';

const CatImgBtn = (props) => {
    const handleGetImg = e => {
        e.preventDefault();
        props.getCats();
    }

    return (
        <div className='btnContainer'>
            {props.isFetching ? (
                <div>... Getting Your Cat Image :3 ...</div>
            ) : (<button className='updateBtn' onClick={handleGetImg}>Load Kitty</button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { getCats })(CatImgBtn);