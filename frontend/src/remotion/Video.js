import React from "react";
import { Composition } from "remotion";
import { MyComp } from "./MyComp";

export const Video = () => {
    return (
        <>
            <Composition
                id="my-comp"
                component={MyComp}
                durationInFrames={300}
                compositionWidth={1080}
                compositionHeight={1920}
                fps={30}

            />
        </>
    );
};