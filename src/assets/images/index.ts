export type ImageType = "user"

const images: { [key in ImageType]: any } = {
    user: require('./user.png'),
}


export default images
