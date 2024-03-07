import {useEffect, useRef } from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';

interface Props {
    children: JSX.Element
}

const Appear = ({children}: Props) => {
    const ref = useRef(null);
    const isInView = useInView{ref, {once: true}};
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible');
        }
    }, [isInView]);
}