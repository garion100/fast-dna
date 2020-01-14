import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import { applyInputStyle, defaultFont } from "../../style";

/**
 * Display class name contract
 */
export interface DisplayControlClassNameContract {
    displayControl?: string;
    displayControl__disabled?: string;
    displayControl__default?: string;
}

const styles: ComponentStyles<DisplayControlClassNameContract, {}> = {
    displayControl: {
        ...applyInputStyle(),
        width: "100%",
        "&$displayControl__default": {
            ...defaultFont,
        },
    },
    displayControl__disabled: {},
    displayControl__default: {},
};

export default styles;
