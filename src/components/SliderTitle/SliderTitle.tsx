import style from './SliderTitle.module.sass';


interface SliderTitleProps {
    title?: string;
}

export const SliderTitle = (props: SliderTitleProps) => {

    return (
        <div className={style.wrapper} >
            {props.title}
        </div>
    );
};

