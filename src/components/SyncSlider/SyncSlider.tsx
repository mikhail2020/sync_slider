import { useEffect, useState } from 'react';
import { MainSlider } from '../SyncSliderDesctop/MainSlider/MainSlider';
import { SecondarySlider } from '../SyncSliderDesctop/SecondarySlider/SecondarySlider';
import { SliderTitle } from '../SyncSliderDesctop/SliderTitle/SliderTitle';
import style from './SyncSlider.module.sass';
import { SyncSliderDesctop } from '../SyncSliderDesctop/SyncSliderDesctop';


interface SyncSliderProps {
    title?: string;
    data: DateItem[];
    timePeriods: 'two' | 'three' | 'four' | 'five' | 'six';
}



export const SyncSlider = (props: SyncSliderProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 320);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 320);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ?
                <></> :
                <SyncSliderDesctop data={props.data} timePeriods={'six'} title={props.title} />
            }

        </>
    );
};





