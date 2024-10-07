import { SecondarySliderItem } from '../SecondarySliderItem/SecondarySliderItem';
import style from './SecondarySlider.module.sass';
import prev from '../../assets/icons/secondPrev.svg';
import next from '../../assets/icons/secondNext.svg';




interface SecondarySliderProps {


}

export const SecondarySlider = (props: SecondarySliderProps) => {

    return (
        <div className={style.wrapper} >
            <div className={`${style.controlWrapper} ${style.prev}`} >
                <button className={style.control}>
                    <img src={prev} alt="Предыдущие ключевые события" />
                </button>
            </div>

            <SecondarySliderItem />
            <SecondarySliderItem />
            <SecondarySliderItem />
            <SecondarySliderItem />
            <SecondarySliderItem />




            <div className={`${style.controlWrapper} ${style.next}`} >
                <button className={style.control}>
                    <img src={next} alt="Следующие ключевые события" />
                </button>
            </div>

        </div>
    );
};




