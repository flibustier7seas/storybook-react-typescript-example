import * as React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";

import { Button } from "./Button";

storiesOf("Button", module)
    .addParameters({
        info: `
    ### Notes

    Button component

    ### Usage
    ~~~ts
    Button onClick={clickHandler}>Hello Button</Button>
    ~~~`,
    })
    .addWithJSX("basic Button", () => (
        <Button disabled={boolean("disabled", false)} onClick={() => alert("hello there")}>
            {text("content", "Hello World")}
        </Button>
    ))
    .addWithJSX("disabled Button", () => (
        <Button disabled={boolean("disabled", true)} onClick={() => alert("hello there")}>
            {text("content", "Hello World")}
        </Button>
    ));
