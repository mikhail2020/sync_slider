

import style from './SecondarySliderItem.module.sass';


interface SecondarySliderItemProps {


}

export const SecondarySliderItem = (props: SecondarySliderItemProps) => {

    return (
        <div className={style.wrapper} >
            <div className={style.title}>2015</div>
            <div className={style.body}>
                13 сентября — частное солнечное затмение,
                видимое в Южной Африке и части Антарктиды
                видимое в Южной Африке и части Антарктиды

            </div>
        </div>
    );
};




