import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import { applyInputStyle, defaultFont } from "../../style";

/**
 * Button class name contract
 */
export interface ButtonControlClassNameContract {
    buttonControl?: string;
    buttonControl__disabled?: string;
    buttonControl__default?: string;
}

const styles: ComponentStyles<ButtonControlClassNameContract, {}> = {
    buttonControl: {
        ...applyInputStyle(),
        width: "100%",
        textAlign: "start",
        "&$buttonControl__default": {
            ...defaultFont,
        },
    },
    buttonControl__disabled: {},
    buttonControl__default: {},
};

export default styles;
