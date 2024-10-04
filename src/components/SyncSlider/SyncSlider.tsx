import { MainSlider } from '../MainSlider/MainSlider';
import { SecondarySlider } from '../SecondarySlider/SecondarySlider';
import style from './SyncSlider.module.sass';


interface SyncSliderProps {


}

export const SyncSlider = (props: SyncSliderProps) => {

    return (
        <div className={style.wrapper} >
            <MainSlider/>
            <SecondarySlider/>
            
        </div>
    );
};

