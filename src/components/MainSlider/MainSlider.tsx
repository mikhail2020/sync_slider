import style from './MainSlider.module.sass';
import prev from '../../assets/icons/prev.svg';
import next from '../../assets/icons/next.svg';


interface MainSliderProps {


}

export const MainSlider = (props: MainSliderProps) => {

    return (
        <div className={style.wrapper} >
            <div className={style.circle}>
            </div>
            <div className={style.period}>
                <div className={style.firstDate}>2015</div>
                <div className={style.secondDate}>2022</div>
            </div>

            <div className={style.navigationPanel}>
                <div className={style.pageIndicator}>1/6</div>

                <div className={style.navigationControls}>
                    <button className={style.button}>
                        <img src={prev} alt="Предыдущий период" />
                    </button>
                    <button className={style.button}>
                        <img src={next} alt="Следующий период" />
                    </button>
                </div>
            </div>

        </div>
    );
};

