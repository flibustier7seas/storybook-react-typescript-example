import * as React from "react";

describe("React", function() {
    it("should be created div element", () => {
        const element = React.createElement("div", { className: "app" });

        expect(element.type).toEqual("div");
        expect(element.props).toEqual({ className: "app" });
    });

    it("should be created MyComponent element", () => {
        const MyComponent: React.StatelessComponent<{ message: string }> = ({ message }) => {
            return <span>{message}</span>;
        };

        const element = React.createElement(MyComponent, { message: "test" }, null);

        expect(element.type).toEqual(MyComponent);
        expect(element.props).toEqual({ message: "test", children: null });
    });

    it("should be created ParentComponent element", () => {
        const ChildComponent: React.StatelessComponent<{ message: string }> = ({ message }) => {
            return <span>{message}</span>;
        };

        const ParentComponent: React.StatelessComponent<{ message: string }> = ({ message }) => {
            return <ChildComponent message={message} />;
        };

        const element = React.createElement(ParentComponent, { message: "test" }, null);

        expect(element.type).toEqual(ParentComponent);
        expect(element.props).toEqual({ message: "test", children: null });
    });
});
