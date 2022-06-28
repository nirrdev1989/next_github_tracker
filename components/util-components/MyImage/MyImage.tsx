import Image from "next/image"
import { DetailedHTMLProps, ImgHTMLAttributes } from "react"
import styles from "./MyImage.module.css"

interface MyImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
   src: string
   width: number
   height: number
   border: "circle" | "square"
}
export default function MyImage({ src, width, height, border }: MyImageProps): JSX.Element {

   return (
      <Image className={`${styles.img} ${styles[border]}`} width={width} height={height} objectFit="cover" src={src} alt="no image" />
   )
}
