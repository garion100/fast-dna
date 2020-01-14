import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import { applyInputStyle, defaultFont } from "../../style";

/**
 * Number field class name contract
 */
export interface NumberFieldControlClassNameContract {
    numberFieldControl?: string;
    numberFieldControl__disabled?: string;
    numberFieldControl__default?: string;
}

const styles: ComponentStyles<NumberFieldControlClassNameContract, {}> = {
    numberFieldControl: {
        ...applyInputStyle(),
        width: "100%",
        "&$numberFieldControl__default": {
            ...defaultFont,
        },
    },
    numberFieldControl__disabled: {},
    numberFieldControl__default: {},
};

export default styles;
