import fs from "fs";
import os from "os";
import path from "path";
import { bundle } from "@remotion/bundler";
import {
    getCompositions,
    renderFrames,
    stitchFramesToVideo,
} from "@remotion/renderer";

const start = async () => {
    // The composition you want to render
    const compositionId = "my-comp";

    // Create a webpack bundle of the entry file.
    const bundleLocation = await bundle(require.resolve("./index"));

    // Extract all the compositions you have defined in your project
    // from the webpack bundle.
    const comps = await getCompositions(bundleLocation, {
        // You can pass custom input props that you can retrieve using getInputProps()
        // in the composition list. Use this if you want to dynamically set the duration or
        // dimensions of the video.
        inputProps: {
            custom: "data",
        },
    });

    // Select the composition you want to render.
    const composition = comps.find((c) => c.id === compositionId);

    // Ensure the composition exists
    if (!composition) {
        throw new Error(`No composition with the ID ${compositionId} found`);
    }

    // We create a temporary directory for storing the frames
    const framesDir = await fs.promises.mkdtemp(
        path.join(os.tmpdir(), "remotion-")
    );

    // We create JPEGs for all frames
    const { assetsInfo } = await renderFrames({
        config: composition,
        // Path of the webpack bundle you have created
        webpackBundle: bundleLocation,
        // Get's called after bundling is finished and the
        // actual rendering starts.
        onStart: () => console.log("Rendering frames..."),
        // Handle errors in your React code
        onError: (info) => {
            if (info.frame === null) {
                console.error(
                    "Got error while initalizing video rendering",
                    info.error
                );
            } else {
                console.error("Got error at frame ", info.frame, info.error);
            }
        },
        onFrameUpdate: (f) => {
            // Log a message whenever 10 frames have rendered.
            if (f % 10 === 0) {
                console.log(`Rendered frame ${f}`);
            }
        },
        // How many CPU threads to use. `null` will use a sane default (half of the available threads)
        // See 'CLI options' section for concurrency options.
        parallelism: null,
        outputDir: framesDir,
        // React props passed to the root component of the sequence. Will be merged with the `defaultProps` of a composition.
        inputProps: {
            titleText: "Hello World",
        },
        compositionId,
        // Can be either 'jpeg' or 'png'. JPEG is faster, but has no transparency.
        imageFormat: "jpeg",
    });

    // Add this step if you want to make an MP4 out of the rendered frames.
    await stitchFramesToVideo({
        // Input directory of the frames
        dir: framesDir,
        // Overwrite existing video
        force: true,
        // Possible overwrite of video metadata,
        // we suggest to just fill in the data from the
        // video variable
        fps: composition.fps,
        height: composition.height,
        width: composition.width,
        // Must match the value above for the image format
        imageFormat: "jpeg",
        // Pass in the desired output path of the video. Et voilà!
        outputLocation: path.join(framesDir, "out.mp4"),
        // FFMPEG pixel format
        pixelFormat: "yuv420p",
        // Information needed to construct audio correctly.
        assetsInfo,
        // Hook into the FFMPEG progress
        onProgress: (frame) => undefined,
    });
};

start();