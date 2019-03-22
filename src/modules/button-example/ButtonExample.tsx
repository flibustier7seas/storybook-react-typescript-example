import * as React from "react";

const classNames = require("classnames/bind");

import { Button } from "component/button";

import styles from "./ButtonExample.scss";
const style = classNames.bind(styles);

interface ButtonExampleData {}

interface ButtonExampleHandlers {
    createNewMessage: (value: string) => void;
}

export class ButtonExample extends React.PureComponent<ButtonExampleData & ButtonExampleHandlers> {
    private textInput: HTMLInputElement;

    public render() {
        return (
            <div className={style(styles["button-example"])}>
                <input
                    type={"text"}
                    ref={input => {
                        this.textInput = input;
                    }}
                />
                <Button onClick={this.handleClick}>Alert</Button>
            </div>
        );
    }

    private handleClick = () => {
        alert(this.textInput.value);
    };
}
