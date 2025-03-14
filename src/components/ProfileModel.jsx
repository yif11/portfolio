import "@google/model-viewer";

const ProfileModel = () => {
    return (
        <model-viewer
            ar
            ar-modes="scene-viewer webxr quick-look"
            src="/portfolio/assets/yif11.glb"
            // ios-src="/assets/yif11.usdz"
            shadow-intensity="1"
            alt="model"
            auto-rotate
            camera-controls
            autoplay
            scale="1 1 1"
            class="w-[90%] h-[100%] rounded-lg"
        ></model-viewer>
    );
};

export default ProfileModel;
