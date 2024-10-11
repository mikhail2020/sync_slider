import style from './MainSlider.module.sass';
import prev from '../../assets/icons/prev.svg';
import next from '../../assets/icons/next.svg';
import { useEffect, useState } from 'react';
import gsap from 'gsap';


interface MainSliderProps {
    distributedData: DateItem[][];
    activeSlide: number;
    setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const MainSlider = (props: MainSliderProps) => {

    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');
    const { activeSlide, setActiveSlide } = props;
    const totalDots = props.distributedData.length
    const degBetweenDots = getHowManyDegBetweenDots(totalDots);
    const [showLabel, setShowLabel] = useState(false);

    // Состояние для текущего угла поворота
    const [rotation, setRotation] = useState(0);

    const START_POSITION = 60;

    useEffect(() => {
        function getSelectDate() {
            const selectPeriod = props.distributedData[activeSlide - 1];

            if (props.distributedData[0].length) {
                setFirstDate(selectPeriod[0].year);
                setSecondDate(selectPeriod[selectPeriod.length - 1].year);
            }
        }
        getSelectDate();

        setShowLabel(false);
        const timer = setTimeout(() => {
            setShowLabel(true);
        }, 500);

        return () => {
            clearTimeout(timer)
        };
    }, [activeSlide, props.distributedData]);


    gsap.to('.selectPeriod', {
        scale: 8,
        backgroundColor: "#F4F5F9",
    });

    gsap.to('.notSelectPeriod', {
        scale: 1, // Возвращение к исходному размеру
        backgroundColor: "#303E5880", // Исходный цвет фона
    });



    // Анимация счетчика
    useEffect(() => {
        if (firstDate && secondDate) {
            gsap.to(`.${style.firstDate}`, {
                innerText: firstDate,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 }
            });
            gsap.to(`.${style.secondDate}`, {
                innerText: secondDate,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 }
            });
        }
    }, [firstDate, secondDate]);


    function prevPeriod() {
        setActiveSlide(oldState => oldState - 1);
        const rotate = rotation + degBetweenDots;
        setRotation(rotate);
        rotationOneStep(rotate);
    }

    function nextPeriod() {
        setActiveSlide(oldState => oldState + 1);
        const rotate = rotation - degBetweenDots;
        setRotation(rotate);
        rotationOneStep(rotate);
    }

    // Функция для анимации кнопки при наведении
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            scale: 8,
            backgroundColor: "#F4F5F9",
            duration: 0.3,
        });
    };

    // Функция для сброса анимации при уходе мыши
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            backgroundColor: "#303E5880",
            duration: 0.3,
        });
    };

    // Функция для обработки клика по кнопке(на "Каруселе")
    const handleClick = (index: number) => {

        const newActiveSlide = index + 1;
        setActiveSlide(newActiveSlide);

        // Вычисляем новое значение rotation
        let newRotation = ((newActiveSlide - activeSlide) * degBetweenDots);

        // Учитываем текущее значение rotation
        const totalRotation = rotation - newRotation;

        setRotation(totalRotation);

        // Анимация вращения контейнера с кнопками
        gsap.to(`.${style.circle}`, {
            rotation: totalRotation,
            duration: 1,
            ease: "power1.inOut"
        });

        gsap.to(`.${style.circleButton}`, {
            rotation: -totalRotation,
            duration: 0.5,
            ease: "power1.inOut"
        });
    };


    return (
        <div className={style.wrapper}>

            {showLabel && (
                <div className={`${style.label_selectPeriod} ${showLabel ? style.show : ''}`}>
                    {getThemeSelectPeriod(activeSlide, props.distributedData)}
                </div>
            )}

            <div className={style.circle}>
                {
                    props.distributedData.map((el, index) => {
                        const angle = (index * degBetweenDots) - START_POSITION; // Угол для текущего элемента
                        const radius = 265; // Радиус большого круга
                        
                        // Вычисляем начальные координаты
                        const x = (radius * Math.cos(angle * (Math.PI / 180)));
                        const y = radius * Math.sin(angle * (Math.PI / 180));

                        return (
                            <>
                                <div
                                    key={index}
                                    className={`${style.circleButton} ${activeSlide - 1 === index ? "selectPeriod" : "notSelectPeriod"}`}
                                    style={{ transform: `translate(${x}px, ${y}px)` }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(index)}
                                >
                                    <span
                                        style={{
                                            transition: 'transform 0.5s ease-in-out',
                                            transform: `rotate(-${rotation}deg)`,
                                        }}
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className={style.period}>
                <div className={style.firstDate}>{firstDate}</div>
                <div className={style.secondDate}>{secondDate}</div>
            </div>

            <div className={style.navigationPanel}>
                <div className={style.pageIndicator}>{activeSlide}/{totalDots}</div>
                <div className={style.navigationControls}>
                    <button className={style.button} onClick={prevPeriod} disabled={activeSlide < 2}>
                        <img src={prev} alt="Предыдущий период" />
                    </button>
                    <button className={style.button} onClick={nextPeriod} disabled={props.distributedData.length <= activeSlide}>
                        <img src={next} alt="Следующий период" />
                    </button>
                </div>
            </div>

        </div >
    );
};

/**Функция вычисляет сколько градусов между точками */
function getHowManyDegBetweenDots(timePeriods: number) {
    switch (timePeriods) {
        case 2:
            return 180;
        case 3:
            return 120;
        case 4:
            return 90;
        case 5:
            return 72;
        case 6:
            return 60;
        default:
            return 0;
    }
}
/**Функция возвращает тему выбранного периода, если у всех событий одинаковая тема */
function getThemeSelectPeriod(selectPeriod: number, allPeriod: DateItem[][]) {

    const selectPerodArr = allPeriod[selectPeriod - 1];

    const firstTheme = selectPerodArr.length && selectPerodArr[0].theme;

    const allMatch = selectPerodArr.every(event => event.theme === firstTheme);

    return allMatch ? firstTheme : "";

}

/**Функция вращает "Карусель" на один шаг */
function rotationOneStep(rotate: number) {
    gsap.to(`.${style.circle}`, {
        rotation: rotate,
        duration: 1,
        ease: "power1.inOut"
    });
    gsap.to(`.${style.circleButton}`, {
        rotation: -rotate,
        duration: 0.5,
        ease: "power1.inOut"
    });
}