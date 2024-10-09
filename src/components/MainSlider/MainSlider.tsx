import style from './MainSlider.module.sass';
import prev from '../../assets/icons/prev.svg';
import next from '../../assets/icons/next.svg';
import { useEffect, useState } from 'react';


interface MainSliderProps {
    distributedData: DateItem[][];
    activeSlide: number;
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const MainSlider = (props: MainSliderProps) => {

    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');

    const {activeSlide, setActiveSlide } = props;


    useEffect(() => {
        function getSelectDate() {
            const selectPeriod = props.distributedData[activeSlide - 1];

            if (props.distributedData[0].length) {
                setFirstDate(selectPeriod[0].year);
                setSecondDate(selectPeriod[selectPeriod.length - 1].year);
            }
        }
        getSelectDate();
    }, [activeSlide, props.distributedData]);


    function prevPeriod() {
        setActiveSlide(oldState => oldState - 1);
    }

    function nextPeriod() {
        setActiveSlide(oldState => oldState + 1);
    }

    
    return (
        <div className={style.wrapper} >
            <div className={style.circle}>
            </div>
            <div className={style.period}>
                <div className={style.firstDate}>{firstDate}</div>
                <div className={style.secondDate}>{secondDate}</div>
            </div>

            <div className={style.navigationPanel}>
                <div className={style.pageIndicator}>{activeSlide}/6</div>

                <div className={style.navigationControls}>
                    <button className={style.button} onClick={prevPeriod} disabled={activeSlide<2}>
                        <img src={prev} alt="Предыдущий период" />
                    </button>
                    <button className={style.button} onClick={nextPeriod} disabled={props.distributedData.length <= activeSlide}>
                        <img src={next} alt="Следующий период" />
                    </button>
                </div>
            </div>

        </div>
    );
};

