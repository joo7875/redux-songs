import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    // console.log(song);
    // console.log(props); // when the argument was props

    if (!song) {
        return <div>Select a song</div>;
    }
    
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br></br>
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);