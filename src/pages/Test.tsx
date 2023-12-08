import { motion } from "framer-motion";
import '../styles/_test.scss'

export default function Test() {
  return (
    <div style={{ width: "100vw", height: "300vh" }}>
      <div style={{ 
        height: "110vh",
        display: "flex",
        position: "sticky",
        top: "0px",
       }}
       >
        <motion.div className="child" style={{ height: "100%", width: "50vw" }}>
          <h2>Slide In </h2>
        </motion.div>
        <motion.div 
          className="child" 
          style={{ height: "100%", width: "50vw" }}>
          <h2>Scroll Down to Zoom Out</h2>
        </motion.div>
      </div>
    </div>
  );
}