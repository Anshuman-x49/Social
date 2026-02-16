const { ImageKit } = require('@imagekit/nodejs');

const imageKit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
})

const uploadImage = async (buffer) => {
    try {
        const result = await imageKit.files.upload({
            file: buffer.toString('base64'),
            fileName: `image_${Date.now()}.jpg`,
            folder: '/socials'
        })
        return result;
    } catch (error) {
        throw new Error(`Image upload failed: ${error.message}`);
    }
}

module.exports = uploadImage;