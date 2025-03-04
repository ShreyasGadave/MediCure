import {v2 as coludinary} from 'cloudinary'

const connectColudinary= async ()=>{
    coludinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
}
export default connectColudinary;