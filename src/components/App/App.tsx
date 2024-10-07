import React from 'react';
import style from './App.module.sass';

import { SyncSlider } from '../SyncSlider/SyncSlider';

function App() {
    return (
        <div className={style.container}>
            <SyncSlider title='Исторические даты' />
        </div>
    );
}

export default App;
