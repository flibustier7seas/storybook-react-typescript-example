const styles = {
    header: {
        h1: {
            marginRight: "20px",
            fontSize: "25px",
            display: "inline",
        },
        body: {
            paddingTop: 0,
            paddingBottom: 0,
        },
        h2: {
            display: "inline",
            color: "#999",
        },
    },
    infoBody: {
        padding: "0px 5px",
        lineHeight: "2",
    },
};

// Global configuration for the info addon across all of your stories.
exports.defaultSettings = {
    inline: false,
    source: false,
    header: false,
    styles,
};
