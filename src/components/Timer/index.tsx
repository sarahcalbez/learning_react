import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";
import { timeInSeconds } from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Timer({ selected, finishTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeInSeconds(selected.time))
        }
    }, [selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finishTask();
        }, 1000); // milisegundos
    }

    return (
        <div className={style.timer} >
            <p className={style.title}>Choose a card and start the timer!</p>
            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Start
            </Button>
        </div>
    )
}