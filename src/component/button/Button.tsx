import * as React from "react";

const classNames = require("classnames/bind");

import styles from "./Button.scss";
const style = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export class Button extends React.PureComponent<Props> {
    public render() {
        const { children, disabled } = this.props;

        const classes = style(styles.button, { [styles["button--disabled"]]: disabled });

        return (
            <div className={classes} onClick={this.handleClick}>
                {children}
            </div>
        );
    }

    private handleClick = () => {
        const { onClick, disabled = false } = this.props;
        if (!disabled && onClick) {
            onClick();
        }
    };
}
