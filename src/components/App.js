import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// export default => import selectSong from ... (No curly brackets needed)
// export const selectSong, no default => need curly brackets
import { selectSong } from '../actions';
import actions from '../actions'; // shorten index.js inside folder actions 

const App = () => {
    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;