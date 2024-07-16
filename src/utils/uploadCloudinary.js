const cloud_name = import.meta.env.VITE_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;


const uploadCloudinary = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    try {
        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('upload_preset', upload_preset);

        const res = await fetch(url, {
            method: "post",
            body: uploadData,
        });

        const data = await res.json()
        return data;

    } catch (error) {
        console.error("Upload to Cloudinary failed: ", error.response?.data || error.message);
        throw error;
    }
}

export default uploadCloudinary;