import { SecondarySliderItem } from '../SecondarySliderItem/SecondarySliderItem';
import style from './SecondarySlider.module.sass';
import prev from '../../assets/icons/secondPrev.svg';
import next from '../../assets/icons/secondNext.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { useMemo, useRef, useState } from 'react';




interface SecondarySliderProps {
    dateInPeriod: DateItem[];
}

export const SecondarySlider = (props: SecondarySliderProps) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentIndex(swiper.activeIndex);
    };

    const totalItem = useMemo(() => {
        return props.dateInPeriod.length;
    }, [props.dateInPeriod.length])


    return (
        <div className={style.wrapper} >
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                spaceBetween={10}
                slidesPerView={3.5}
                onSlideChange={handleSlideChange}
            >
                {props.dateInPeriod.map((date, index) => (
                    <SwiperSlide key={index}>
                        <SecondarySliderItem
                            title={date.year}
                            body={date.event}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>



            <div className={`${style.controlWrapper} ${style.prev}`} >
                <div className={`${currentIndex === 0 && style.notShow}`}>
                    <div ref={prevRef} className={`swiper-button-prev ${style.control} `}>
                        <img src={prev} alt="Предыдущие ключевые события" />
                    </div>
                </div>
            </div>

            <div className={`${style.controlWrapper} ${style.next}`}>
                <div className={`${currentIndex >= (totalItem - 3) && style.notShow}`}>
                    <div ref={nextRef} className={`swiper-button-next ${style.control}`}>
                        <img src={next} alt="Следующие ключевые события" />
                    </div>
                </div>
            </div>
        </div>
    );
};




