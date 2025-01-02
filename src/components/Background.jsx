import left from '/images/left.png';
import right from '/images/right.png';

const Background = () => {

    const style = {
        leftBorder:
            'fixed top-5 left-0 w-[30px] md:w-[50px] lg:w-[65px] object-fit min-h-screen bg-repeat-y bg-top mt-[-20px]',
        rightBorder:
            'fixed top-5 right-0 w-[30px] md:w-[50px] lg:w-[65px] object-fit min-h-screen bg-repeat-y bg-top mt-[-20px]',
    };

    return (
        <>
            <div
                className={style.leftBorder}
                style={{
                    backgroundImage: `url(${left})`,
                    backgroundSize: 'contain',
                }}
            ></div>
            <div
                className={style.rightBorder}
                style={{
                    backgroundImage: `url(${right})`,
                    backgroundSize: 'contain',
                }}
            ></div>
        </>
    );
};
export default Background;
