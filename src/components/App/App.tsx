import React from 'react';
import style from './App.module.sass';
import gsap from 'gsap';

import { SyncSlider } from '../SyncSlider/SyncSlider';

const historicalDates: DateItem[] = [
    { year: '1980', event: 'Sinclair Research выпускает домашний компьютер ZX80', theme: 'Наука' },
    { year: '1982', event: 'Sinclair Research выпускает домашний компьютер ZX82', theme: 'Наука' },
    { year: '1983', event: 'Sinclair Research выпускает ZX Spectrum с 16К и 48К оперативной памяти', theme: 'Наука' },
    { year: '1984', event: 'Выпуск ZX Spectrum+ с улучшенной клавиатурой и корпусом', theme: 'Наука' },
    { year: '1985', event: 'Появление первых игр для ZX Spectrum, способствующих росту популярности', theme: 'Наука' },
    { year: '1986', event: 'Выпуск ZX Spectrum 128K, улучшенная версия с увеличенной памятью', theme: 'Наука' },

    { year: '1987', event: '"Хищник"/Predator, США (реж. Джон Мактирнан)', theme: 'Кино' },
    { year: '1988', event: '"Кто подставил кролика Роджера"/Who Framed Roger Rabbit, США (реж. Роберт Земекис)', theme: 'Кино' },
    { year: '1989', event: '"Назад в будущее 2"/Back To The Future2, США (реж. Роберт Земекис)', theme: 'Кино' },
    { year: '1990', event: '"Крепкий орешек 2"/Die Hard 2, США (реж. Ренни Харлин)', theme: 'Кино' },
    { year: '1991', event: '"Семейка Аддамс"/The Addams Family, США ( реж.Барри Зонненфельд)', theme: 'Кино' },

    { year: '1992', event: 'Нобелевская премия по литературе - Дерек Уолкотт,"За блестящий образец карибского эпоса в 64 разделах".', theme: 'Литература' },
    { year: '1994', event: '"Бессонница" - роман Стивена Кинга.', theme: 'Литература' },
    { year: '1995', event: 'Нобелевская премия по литературе - Шеймас Хини.', theme: 'Литература' },
    { year: '1997', event: '""Гарри Поттер и философский камень" - фентези Джоан Кэтлин Роулинг', theme: 'Литература' },

    { year: '1999', event: 'Премьера балета "Золушка" в постановке Жан-Кристофа Майоб сценография Эрнеста Пиньона.', theme: 'Театр' },
    { year: '2000', event: 'Возобновлено издание журнала "Театр".', theme: 'Театр' },
    { year: '2002', event: 'Примьера трилогии Тома Стоппарда "Берег Утопии", Королевский Национальный театр, Лондон', theme: 'Театр' },
    { year: '2003', event: 'Премьера мюзикла "В поисках счастья" в Театре на Таганке.', theme: 'Театр' },
    { year: '2004', event: 'Открытие нового здания Мариинского театра в Санкт-Петербурге.', theme: 'Театр' },
    { year: '2005', event: 'Премьера спектакля "Чайка" в постановке Константина Богомолова.', theme: 'Театр' },

    { year: '2006', event: 'Баскеьбольный клуб ЦСКА стал победителем национального первенства России.', theme: 'Спорт' },
    { year: '2008', event: 'С 2 по 24 августа в Пекине прошли 29-е летние Олимпийские игры.', theme: 'Спорт' },
    { year: '2010', event: '13-28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года.', theme: 'Спорт' },
    { year: '2012', event: 'С 27 июля по 12 августа в Лондоне прошли 30-е летние Олимпийские игры.', theme: 'Спорт' },
    { year: '2014', event: 'XXII зимние Олимпийские игры (Сочи, Россия)', theme: 'Спорт' },

    { year: '2015', event: '13 Сентрября - частичное солнечное затмение, видимое в Южной Африке и части Антарктиды', theme: 'Наука' },
    { year: '2016', event: 'Телеском "Хаббл" обнаружил самую удаленную из всех обнаруженных галактик, получившую обозначение GN-z11', theme: 'Наука' },
    { year: '2017', event: 'Компания Tesla офоициально представила первый в мире электрический грузовик Tesla Semi', theme: 'Наука' },
    { year: '2018', event: 'Старт Космического аппарата Solar Probe Plus, предназначенного для изучения Солнца', theme: 'Наука' },
    { year: '2019', event: 'Google объявил о создании 53-кубитного квантового компьютера', theme: 'Наука' },
    { year: '2020', event: 'Корабль Crew Dragon вернулся на землю из первого пилотируемого полёта', theme: 'Наука' },

]


function App() {
    return (
        <div className={style.container}>
            <SyncSlider
                title='Исторические даты'
                data={historicalDates}
                timePeriods='six'
            />
        </div>
    );
}

export default App;
