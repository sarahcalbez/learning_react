import style from "./Watch.module.scss";

export default function Watch() {
    return (
        <>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchDivisor}>:</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
        </>
        //Using this tag is the same thing to use 
        //<React.Fragment> </React.Fragment>
    )
}