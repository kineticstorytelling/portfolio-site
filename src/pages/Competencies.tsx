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
                            <img src={"/htmllogo.png"} alt="html" />
                            <Typography className="competencies__accordion competencies__accordion--header"><h4>HTML</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <img src={"/Html_ex.gif"} alt="HTML" />
                        </AccordionDetails>
                    </Accordion> 

                    
                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                                    }} >
                        <AccordionSummary id="panel1-header" className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/CSS.3.svg"} alt="CSS" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>CSS</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/css_ex.gif"} alt="CSS" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                                    }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/JavaScript-logo.png"} alt="Javascript" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Javascript</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/javascript-example.gif"} alt="Javascript" />
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                        }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/Typescript_logo_2020.svg.png"} alt="typescript" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Typescript</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/javascript-example.gif"} alt="typescript" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                        }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/pythonlogo1.png"} alt="Python" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>Python</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <img src={"/Python_Example.gif"} alt="Python" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion--item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            boxShadow: 3
                        }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                            <ExpandMoreIcon />
                        }>
                            <img src={"/phplogo.png"} alt="PHP" />
                            <Typography className="competencies__accordion--header competencies__accordion"><h4>PHP</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={"/Php_ex.gif"} alt="PHP" />
                        </AccordionDetails>
                    </Accordion>
                    
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
                        <img src={"/react-logo.png"} className = "competencies__accordion-header-img" alt="React" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>React + React Native</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"/react-example.gif"} alt="React" />
                    </AccordionDetails>
                </Accordion>                        

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                  }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/Sass_Logo_Color.svg"} alt="SASS" />
                        <Typography className="competencies__accordion--header competencies__accordion-"><h4>SASS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"/sass-example.gif"} alt="SASS" />
                    </AccordionDetails>
                </Accordion>
                    
                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/bootstrap-logo.svg"} alt="Bootstrap" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>Bootstrap</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"/bootstrap_ex.gif"} alt="Bootstrap" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/tailwind-logo.png"} alt="tailwind" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>TailwindCSS</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"/Tailwind_ex.gif"} alt="tailwind" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/Postgresql_elephant.svg.png"} alt="PostgreSQL" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>PostgreSQL</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"/Postgresql_ex.gif"} alt="PostgreSQL" />
                    </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                        backgroundColor: "rgba(195, 196, 197, 0.466)",
                        boxShadow: 3
                    }} >
                    <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                        <ExpandMoreIcon />
                    }>
                        <img src={"/mongodb-logo.png"} alt="Mongodb" />
                        <Typography className="competencies__accordion--header competencies__accordion"><h4>MongoDB</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <img src={"/mongo_ex.gif"} alt="Mongodb" />
                    </AccordionDetails>
                </Accordion>


            <div className="competencies__framework--block">
                <ul className="competencies__framework--list">
                    <li><img src={"/jquery-logo.png"} alt="Jquery" /> jQuery</li>
                    <li><img src={"/nodejs-1-logo.png"} alt="NodeJS" /> Node.js</li>
                    <li><img src={"/nextjs-logo.png"} alt="NextJS" /> Next.js</li>
                    <li><img src={"/Expressjs-logo.png"} alt="ExpressJS" /> Express.js</li>
                    <li><img src={"/flask-logo.png"} alt="Flask" /> Flask</li>
                    <li><img src={"/three-js-icon.svg"} alt="Three.js" /> Three.js</li>
                    <li><img src={"/framer-logo.svg"} alt="Framer Motion" style={{height:'45px'}} /> Framer Motion</li>
                    <li><img src={"/gsap-greensock-logo.svg"} alt="GSAP" style={{height:'45px'}} /> GSAP</li>
                </ul>
            </div>

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
                          <img src={"/WordPress_blue_logo.png"} alt="Wordpress" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Wordpress</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/Wordpress_ex.gif"} alt="Wordpress" />
                      </AccordionDetails>
                </Accordion>
                 
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"/Shopify-logo.png"} alt="Shopify" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Shopify</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/Shopify_ex.gif"} alt="Shopify" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"/hubspot-logo.png"} alt="Hubspot" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Hubspot</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/Hubspot_ex.gif"} alt="Hubspot" />
                      </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"/Webflow-logo.png"} alt="Webflow" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Webflow</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/Webflow_ex.gif"} alt="Webflow" />
                      </AccordionDetails>
                </Accordion>

                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"/elementor.svg"} alt="Elementor" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Elementor</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/elementor-example.gif"} alt="Elementor" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"/Figma-logo.svg"} alt="Figma" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Figma</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/figma-example.gif"} alt="Figma" />
                      </AccordionDetails>
                </Accordion>
              
                <Accordion className="competencies__accordion--item  "sx={{ 
                          backgroundColor: "rgba(195, 196, 197, 0.466)",
                          boxShadow: 3
                      }} >
                      <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                          <ExpandMoreIcon />
                      }>
                          <img src={"/Adobe_XD_CC_icon.svg"} alt="Adobexd" />
                          <Typography className="competencies__accordion--header competencies__accordion"><h4>Adobe XD</h4></Typography>
                      </AccordionSummary>
                      <AccordionDetails >
                      <img src={"/Adobe_XD_ex.gif"} alt="Adobexd" />
                      </AccordionDetails>
                </Accordion>
              
            </div>
          </div>   
        </section>
    </>
  )
}

// export default Competencies