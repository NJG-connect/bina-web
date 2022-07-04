import collaboration from './collaboration.svg';
import delay from './delay.svg';
import handleshake from './handleshake.svg';
import improvement from './improvement.svg';
import key from './key.svg';
import sheild from './sheild.svg';

export type ImageType = "user" | "collaboration" | "delay" | "handleshake" | "improvement" | "key" | "sheild"

const images: { [key in ImageType]: any } = {
    user: require('./user.png'),
    collaboration,
    delay,
    handleshake,
    improvement,
    key,
    sheild,
}


export default images
