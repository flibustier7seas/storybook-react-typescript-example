import * as React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, select, text } from "@storybook/addon-knobs/react";

import { Placement, Popover } from "./Popover";

const placements = {
    auto: "auto",
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
};

const reference = {
    button: "button",
    span: "span",
};

storiesOf("Dock", module)
    .addParameters({
        info: `
    ### Notes

    Dock component

    ### Usage
    ~~~ts
    Dock onClick={clickHandler}>Hello Dock</Dock>
    ~~~`,
    })
    .addWithJSX("basic Dock", () => (
        <div id="dockExample">
            <Popover
                placement={select("placement", placements, placements.auto) as Placement}
                isHide={boolean("isHide", false)}
                content={text("content", "Hello World")}
            >
                {ref => {
                    switch (select("reference", reference, reference.button)) {
                        case reference.span: {
                            return <span ref={ref}>Reference element (span)</span>;
                        }
                        default: {
                            return (
                                <button type="button" ref={ref}>
                                    Reference element (button)
                                </button>
                            );
                        }
                    }
                }}
            </Popover>
        </div>
    ));
