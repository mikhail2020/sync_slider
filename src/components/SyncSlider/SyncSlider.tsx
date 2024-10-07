import { MainSlider } from '../MainSlider/MainSlider';
import { SecondarySlider } from '../SecondarySlider/SecondarySlider';
import { SliderTitle } from '../SliderTitle/SliderTitle';
import style from './SyncSlider.module.sass';


interface SyncSliderProps {
    title?: string;
}

export const SyncSlider = (props: SyncSliderProps) => {

    return (
        <div className={style.wrapper} >
            <div className={style.grid}>
                <SliderTitle title={props.title} />
                <MainSlider />
                <SecondarySlider />
            </div>
        </div>
    );
};

