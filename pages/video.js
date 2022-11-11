import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export function Video() {
    const context = React.useContext(ColorModeContext);

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