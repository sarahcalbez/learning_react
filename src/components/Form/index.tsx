import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render(): React.ReactNode {
        return (
            <form>

                <div>
                    <label>
                        Add a new class
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What you want to learn?"
                        required>
                    </input>
                </div>

                <div>
                    <label>
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required>
                    </input>
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;