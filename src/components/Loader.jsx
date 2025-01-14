import { useEffect, useState } from 'react';
import cat from '/images/catloader.svg';

const Loading = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const style = {
        loader: 'min-h-screen flex items-start justify-center pt-[100px] space-x-[60px] lg:space-x-[100px]',
        c1: `w-[25px] transition-opacity ease-in-out duration-[500ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
        }`,
        c2: `w-[25px] transition-opacity ease-in-out duration-[500ms] delay-[200ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
        }`,
        c3: `w-[25px] transition-opacity ease-in-out duration-[500ms] delay-[400ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
        }`,
    };
    return (
        <div className={style.loader}>
            <img
                className={style.c1}
                src={cat}
                alt='Line drawing of a cats face'
            />
            <img
                className={style.c2}
                src={cat}
                alt='Line drawing of a cats face'
            />
            <img
                className={style.c3}
                src={cat}
                alt='Line drawing of a cats face'
            />
        </div>
    );
};
export default Loading;
