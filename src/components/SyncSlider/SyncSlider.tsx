import { useEffect, useState } from 'react';
import { MainSlider } from '../MainSlider/MainSlider';
import { SecondarySlider } from '../SecondarySlider/SecondarySlider';
import { SliderTitle } from '../SliderTitle/SliderTitle';
import style from './SyncSlider.module.sass';


interface SyncSliderProps {
    title?: string;
    data: DateItem[];
    timePeriods: 'two' | 'three' | 'four' | 'five' | 'six';
}



export const SyncSlider = (props: SyncSliderProps) => {

    const distributedData = useDistributedData(props.data, props.timePeriods);

    return (
        <div className={style.wrapper} >
            <div className={style.grid}>
                <SliderTitle title={props.title} />
                <MainSlider distributedData={distributedData} />
                <SecondarySlider />
            </div>
        </div>
    );
};


/**хук распределяет даты по периодам*/
const useDistributedData = (data: DateItem[], timePeriods: 'two' | 'three' | 'four' | 'five' | 'six') => {
    const [distributedData, setDistributedData] = useState<DateItem[][]>([[]]);

    useEffect(() => {
        // на всякий случай сортируем даты по годам
        data.sort((a, b) => parseInt(a.year) - parseInt(b.year))
        // элементов в каждой группе

        const itemsInPeriod = Math.floor(data.length / timePeriodMapping[timePeriods]);
        // остаток
        let remainder = data.length % timePeriodMapping[timePeriods];

        // Массив для хранения распределенных дат
        const distributedData: DateItem[][] = [[]];

        data.forEach((date: DateItem) => {

            if (distributedData[distributedData.length - 1].length < itemsInPeriod) {
                distributedData[distributedData.length - 1].push(date);
            } else if (distributedData[distributedData.length - 1].length === itemsInPeriod && remainder) {
                remainder = remainder - 1;
                distributedData[distributedData.length - 1].push(date);
            }
            else {
                distributedData.push([date]);
            }
        });

        setDistributedData(distributedData);

    }, [data, timePeriods]);

    return distributedData;
};

const timePeriodMapping: Record<string, number> = {
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
};

