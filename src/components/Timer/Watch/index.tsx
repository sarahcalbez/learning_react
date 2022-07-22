import style from "./Watch.module.scss";

interface Props {
    time: number | undefined;
}

export default function Watch({ time = 0 }: Props) {
    
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    const [minuteTens, minuteOnes] = String(minutes).padStart(2, '0');
    const [secondTens, secondOnes] = String(seconds).padStart(2, '0');
    
    return (
        <>
            <span className={style.watchNumber}>{minuteTens}</span>
            <span className={style.watchNumber}>{minuteOnes}</span>
            <span className={style.watchDivisor}>:</span>
            <span className={style.watchNumber}>{secondTens}</span>
            <span className={style.watchNumber}>{secondOnes}</span>
        </>
        //Using this tag is the same thing to use 
        //<React.Fragment> </React.Fragment>
    )
}