import { ComponentStyles, CSSRules } from "@microsoft/fast-jss-manager-react";
import { applySelectInputStyles, applySelectSpanStyles, defaultFont } from "../../style";

/**
 * Select class name contract
 */
export interface SelectControlClassNameContract {
    selectControl?: string;
    selectControl__disabled?: string;
    selectControl__default?: string;
    selectControl_input?: string;
}

const styles: ComponentStyles<SelectControlClassNameContract, {}> = {
    selectControl: {
        ...applySelectSpanStyles(),
        "&$selectControl__default $selectControl_input": {
            ...defaultFont,
        },
    },
    selectControl__disabled: {},
    selectControl_input: {
        ...applySelectInputStyles(),
    },
    selectControl__default: {},
};

export default styles;
