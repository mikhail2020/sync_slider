

import style from './SecondarySliderItem.module.sass';


interface SecondarySliderItemProps {
    title: string;
    body: string;
}

export const SecondarySliderItem = (props: SecondarySliderItemProps) => {

    return (
        <div className={style.wrapper} >
            <div className={style.title}>{props.title}</div>
            <div className={style.body}>{props.body}</div>
        </div>
    );
};




