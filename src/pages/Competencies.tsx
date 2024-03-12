import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/_competencies.scss";
import Reveal from "../components/Reveal";

export default function Competencies () {

    
  return (
    <>
        <section className="competencies" id="competencies">
            
            <Reveal><h2 className='competencies__title'>Competencies</h2></Reveal>
            
              <div className="competencies__category">
                <div className="competencies__category--label"><Reveal><h3>Languages</h3></Reveal></div>
              
                    <Accordion className="competencies__accordion--item" sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                            boxShadow: 3,
                            borderBottom: 'none'
                        }} >
                        <AccordionSummary id="panel1-header" className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"src/assets/htmllogo.png"} alt="html" />
                            <Typography className="competencies__accordion competencies__accordion--header"><h4>HTML</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <img src={"/src/assets/sass-example.gif"} alt="HTML" />
                        </AccordionDetails>
                    </Accordion> 

                    
                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                                    }} >
                        <AccordionSummary id="panel1-header" className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/src/assets/CSS.3.svg"} alt="CSS" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>CSS</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/src/assets/sass-example.gif"} alt="CSS" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                                    }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"src/assets/JavaScript-logo.png"} alt="Javascript" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Javascript</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/src/assets/javascript-example.gif"} alt="Javascript" />
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                        }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"src/assets/Typescript_logo_2020.svg.png"} alt="typescript" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Typescript</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"src/assets/javascript-example.gif"} alt="typescript" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                        }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"src/assets/pythonlogo1.png"} alt="Python" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Python</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <img src={"src/assets/Python_Example.gif"} alt="Python" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                        }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"src/assets/phplogo.png"} alt="PHP" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>PHP</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/src/assets/php_example.gif"} alt="PHP" />
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                    }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/src/assets/Shopify-Liquid-ProgLang.3a0ce20917834e52e635.png"} alt="Liquid" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Liquid</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"src/assets/javascript-example.gif"} alt="Liquid" />
                        </AccordionDetails>
                    </Accordion>  */}
             </div>
                  <br />
            <div className="competencies__category">
            <div className="competencies__category--label"><Reveal><h3>Frameworks and Libraries</h3></Reveal></div>
                
                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                  }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/Sass_Logo_Color.svg"} alt="SASS" />
                        <Typography className="competencies__accordion--header competencies__accordion-"><h4>SASS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/sass-example.gif"} alt="SASS" />
                    </AccordionDetails>
                </Accordion>
                    
                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/bootstrap-logo.svg"} alt="Bootstrap" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>Bootstrap</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/javascript-example.gif"} alt="Bootstrap" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/tailwind-logo.png"} alt="tailwind" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>TailwindCSS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/javascript-example.gif"} alt="tailwind" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/react-logo.png"} className = "competencies__accordion-header-img" alt="React" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>React + React Native</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/react-example.gif"} alt="React" />
                    </AccordionDetails>
                </Accordion>
                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/Postgresql_elephant.svg.png"} alt="PostgreSQL" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>PostgreSQL</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/javascript-example.gif"} alt="PostgreSQL" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/mongodb-logo.png"} alt="Mongodb" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>MongoDB</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/javascript-example.gif"} alt="Mongodb" />
                    </AccordionDetails>
                </Accordion>

                {/* <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/nodejs-1-logo.png"} alt="NodeJS" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>NodeJS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/html-example.gif"} alt="NodeJS" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/src/assets/nextjs-logo.png"} alt="NextJS" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>NextJS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/html-example.gif"} alt="NextJS" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/src/assets/framer-logo.svg"} alt="Framer Motion" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>Framer Motion</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/html-example.gif"} alt="Framer Motion" />
                    </AccordionDetails>
                </Accordion>
                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/three-js-icon.svg"} alt="Three.js" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>Three.js</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/html-example.gif"} alt="NextJS" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/src/assets/flask-logo.png"} alt="Flask" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>Flask</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/html-example.gif"} alt="Flask" />
                    </AccordionDetails> */}
                {/* </Accordion> */}
            <div className="listblock">
                <ul className="list">
                    <li><img src={"src/assets/jquery-logo.png"} alt="Jquery" /> jQuery</li>
                    <li><img src={"src/assets/nodejs-1-logo.png"} alt="NodeJS" /> Nodejs</li>
                    <li><img src={"/src/assets/nextjs-logo.png"} alt="NextJS" /> Nextjs</li>
                    <li><img src={"/src/assets/Expressjs-logo.png"} alt="ExpressJS" /> Expressjs</li>
                    <li><img src={"/src/assets/flask-logo.png"} alt="Flask" /> Flask</li>
                    <li><img src={"src/assets/three-js-icon.svg"} alt="Three.js" /> Three.js</li>
                    <li><img src={"/src/assets/framer-logo.svg"} alt="Framer Motion" style={{height:'45px'}} /> Framer Motion</li>
                    <li> React Three Fiber</li>
                </ul>
            </div>

                {/* <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/src/assets/Expressjs-logo.png"} alt="ExpressJS" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>ExpressJS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/html-example.gif"} alt="ExpressJS" />
                    </AccordionDetails>
                </Accordion> */}

                {/* <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                      }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"src/assets/jquery-logo.png"} alt="Jquery" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>jQuery</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"src/assets/javascript-example.gif"} alt="jquery" />
                    </AccordionDetails>
                </Accordion> */}


                <br />

            <div className="competencies__category">
            <div className="competencies__category--label"><Reveal><h3>CMS and Design</h3></Reveal></div>
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/WordPress_blue_logo.png"} alt="Wordpress" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Wordpress</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Wordpress" />
                      </AccordionDetails>
                </Accordion>
                 
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/Shopify-logo.png"} alt="Shopify" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Shopify</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Shopify" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/hubspot-logo.png"} alt="Hubspot" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Hubspot</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Hubspot" />
                      </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/Webflow-logo.png"} alt="Webflow" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Webflow</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Webflow" />
                      </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/elementor.svg"} alt="Elementor" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Elementor</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Elementor" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/Figma-logo.svg"} alt="Figma" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Figma</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/figma-example.gif"} alt="Figma" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/Adobe_XD_CC_icon.svg"} alt="Adobexd" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Adobe XD</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Adobexd" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                      backgroundColor: "rgba(195, 196, 197, 0.466)",
                      boxShadow: 3
                    }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"src/assets/Adobe_Photoshop_CC_icon.svg"} alt="AdobePhotoshop" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Adobe Photoshop</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"src/assets/elementor-example.gif"} alt="Adobe photoshop" />
                      </AccordionDetails>
                </Accordion>
            </div>
          </div>   
        </section>
    </>
  )
}

// export default Competencies