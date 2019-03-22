import { configure, addDecorator, setAddon } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import JSXAddon from "storybook-addon-jsx";

import { defaultSettings as addonInfoSettings } from "./settings/addon-info";

// Configure stories

addDecorator(withInfo(addonInfoSettings));
addDecorator(withKnobs);

setAddon(JSXAddon);

// Load stories

const req = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
