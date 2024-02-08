import { useAnimation, useInView} from "framer-motion";
import { useEffect, useRef } from "react";

const TitleAnimation = () => {
const ref = useRef(null);
const isInView = useInView(ref, {once:true});
const mainControls = useAnimation();
useEffect(()=>{
    if (isInView){
        mainControls.start("visible");
    }
}, [isInView]);

}

export default TitleAnimation;