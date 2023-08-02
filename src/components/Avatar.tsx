import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps){
    return(
        <img
            className={`w-14 h-14 rounded-lg ${hasBorder ? 'border-4 border-solid border-gray-200 outline-2 outline outline-blue-100' : ''}`}
            {...props}
        />
    )
}