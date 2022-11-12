import { useContext } from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export function Video() {
    const context = useContext(ColorModeContext);

    return (
        <div>
            Video!
            {context.mode}
            <button onClick={() => context.toggleMode()}>
                Change mode
            </button>
        </div>
    )
}