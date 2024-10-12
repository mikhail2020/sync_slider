import { useRef, useState } from 'react';
import { SyncSliderProps, useDatesForPeriod, useDistributedData } from '../SyncSliderDesctop/SyncSliderDesctop';
import style from './SyncSliderMobile.module.sass';
import { useDateSelectPeriod, useGsapAnimations } from '../SyncSliderDesctop/MainSlider/MainSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../../assets/icons/prevMobile.svg';
import next from '../../assets/icons/nextMobile.svg';




export const SyncSliderMobile = (props: SyncSliderProps) => {
    const [activeSlide, setActiveSlide] = useState(1);
    const distributedData = useDistributedData(props.data, props.timePeriods);
    const { firstDate, secondDate } = useDateSelectPeriod(activeSlide, distributedData);
    const dateInPeriod = useDatesForPeriod(activeSlide, distributedData);
    const totalPeriod = distributedData.length;
    const sliderRef = useRef<HTMLDivElement | null>(null);


    useGsapAnimations(firstDate, secondDate, sliderRef.current);


    function prevPeriod() {
        setActiveSlide(oldState => oldState - 1);
    }
    function nextPeriod() {
        setActiveSlide(oldState => oldState + 1);
    }

    function selectPeriod(index: number) {
        setActiveSlide(index);
    }

    return (
        <div className={style.wrapper} ref={sliderRef}>
            <div>
                <div className={style.title}>{props.title}</div>
                <div className={style.period}>
                    <div id="firstDate" className={style.firstDate}>{firstDate}</div>
                    <div id="secondDate" className={style.secondDate}>{secondDate}</div>
                </div>
                <div className={style.divider} />
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                >
                    {dateInPeriod.map((date, index) => (
                        <SwiperSlide key={index}>
                            <SliderItemMobile
                                title={date.year}
                                body={date.event}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={style.controlsWrapper}>
                <div className={style.indicator}>{activeSlide}/{totalPeriod}</div>
                <div className={style.controls}>
                    <button className={style.control} onClick={prevPeriod} disabled={activeSlide === 1}>
                        <img src={prev} alt="Предыдущий период" />
                    </button>
                    <button className={style.control} onClick={nextPeriod} disabled={activeSlide === totalPeriod}>
                        <img src={next} alt="Следующий период" />
                    </button>
                </div>

                <div className={style.panelDotteds}>
                    {
                        distributedData.map((per, index) =>
                            <div
                                key={index}
                                onClick={() => selectPeriod(index + 1)}
                                className={style.dotted}
                                style={{ opacity: `${index + 1 === activeSlide ? "1" : "0.5"}` }}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}

type SliderItemMobileProps = {
    title: string;
    body: string;
}

const SliderItemMobile = (props: SliderItemMobileProps) => {

    return (
        <div className={style.wrapperItem}>
            <div className={style.titlelItem}>{props.title}</div>
            <div className={style.bodyItem}>{props.body}</div>
        </div>
    )
}