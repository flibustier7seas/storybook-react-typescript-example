import * as React from "react";
import * as ReactDOM from "react-dom";

import Popper, { Placement } from "popper.js";

import styles from "./Popover.scss";

// tslint:disable-next-line:no-console
console.log("styles", JSON.stringify(styles, null, " "));

interface Props {
    className?: string;
    isHide?: boolean;
    placement?: Placement;

    content: React.ReactNode | RenderContentNode;
    children: React.ReactNode | RenderAnchorNode;
}

export { Placement };

// tslint:disable:no-any

type RenderContentNode = (
    contentRef: React.RefObject<any>,
    arrowRef?: React.RefObject<any>,
) => React.ReactNode;

type RenderAnchorNode = (anchorRef: React.RefObject<any>, className?: string) => React.ReactNode;

export class Popover extends React.PureComponent<Props> {
    private popper: Popper;

    private contentReference: React.RefObject<any>;

    private anchorReference: React.RefObject<any>;

    constructor(props) {
        super(props);

        this.contentReference = React.createRef();
        this.anchorReference = React.createRef();
    }

    public componentDidMount() {
        this.configureManager();
    }

    public componentDidUpdate() {
        this.configureManager();
    }

    public render() {
        return (
            <>
                {this.renderAnchor()}
                {this.renderPopup()}
            </>
        );
    }

    private renderAnchor = () => {
        const { className, children: anchor } = this.props;

        let renderAnchorNode: RenderAnchorNode;

        if (anchor instanceof Function) {
            renderAnchorNode = anchor;
        } else {
            renderAnchorNode = (contentRef, className) => (
                <div className={className} ref={contentRef}>
                    {anchor}
                </div>
            );
        }

        return renderAnchorNode(this.anchorReference, className);
    };

    private renderPopup = () => {
        const { content, isHide } = this.props;

        if (isHide) {
            return null;
        }

        let renderContentNode: RenderContentNode;

        if (content instanceof Function) {
            renderContentNode = content;
        } else {
            renderContentNode = contentRef => <div ref={contentRef}>{content}</div>;
        }

        return renderContentNode(this.contentReference);
    };

    private configureManager = () => {
        const { isHide, placement = "auto" } = this.props;

        const anchorElement = ReactDOM.findDOMNode(this.anchorReference.current) as Element;
        const poppupElement = ReactDOM.findDOMNode(this.contentReference.current) as Element;

        if (isHide || !anchorElement || !poppupElement) {
            if (this.popper) {
                this.popper.destroy();
                this.popper = undefined;
            }

            return;
        }

        if (this.popper) {
            // TODO: обработать случай, когда меняется this.anchorReference или this.contentReference
            this.popper.options = { ...this.popper.options, placement };
            this.popper.update();
            return;
        }

        // TODO: поддержать использование порталов, расчёт позиции надо делать относительно всего окна
        // TODO: поддержать использование arrow
        this.popper = new Popper(anchorElement, poppupElement, { placement });
    };
}
