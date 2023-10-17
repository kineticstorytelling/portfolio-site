import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from "@mui/icons-material"
import './_competencies.scss'

const Competencies = () => {
  return (
    <>
    <section className="competencies">
        <h2 className='competencies__title'>Competencies</h2>
        <div className="comptencies__category">

          <div className="competencies__category--label"><h3>Languages</h3></div>
              
              <Accordion className="competencies__accordion--item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                    boxShadow: 3,
                    borderBottom: 'none'
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion--header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"..htmllogo.png"} alt="html" />
                    <Typography className="competencies__accordion competencies__accordion--header"><h4>HTML</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <img src={".sass-example.gif"} alt="CSS" />
                </AccordionDetails>
            </Accordion>

            
            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                            }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/CSSLogo_mod1.png"} alt="CSS" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>CSS</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/sass-example.gif"} alt="CSS" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                            }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/JavaScript-logo.png"} alt="Javascript" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>Javascript</h4></Typography>
                </AccordionSummary>tg
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="Javascript" />
                </AccordionDetails>
            </Accordion>
            
            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/Typescript_logo_2020.svg.png"} alt="typescript" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>Typescript</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="typescript" />
                </AccordionDetails>
            </Accordion>
            
            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
            }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/Shopify-Liquid-ProgLang.png"} alt="typescript" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>Liquid</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="typescript" />
                </AccordionDetails>
            </Accordion>
        </div>
              <br />
      <div className="competencies__category">
        <div className="competencies__category-label"><h3>Frameworks and Libraries</h3></div>
            
            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
              }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/SASS_Logo_mod1.png"} alt="SASS" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>SASS</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/sass-example.gif"} alt="SASS" />
                </AccordionDetails>
            </Accordion>
                
            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/bootstrap-logo_1.png"} alt="Bootstrap" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>Bootstrap</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="Bootstrap" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
            }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/Tailwind_CSS_Logo.png"} alt="tailwind" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>Tailwind</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="tailwind" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/React_Logo.png"} className = "competencies__accordion-header-img" alt="React" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>React</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/react-example.gif"} alt="React" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/nodejs-1-logo1.png"} alt="NodeJS" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>NodeJS</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/html-example.gif"} alt="NodeJS" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/nodejs-1-logo1.png"} alt="NextJS" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>NodeJS</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/html-example.gif"} alt="NextJS" />
                </AccordionDetails>
            </Accordion>
            
            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/nodejs-1-logo1.png"} alt="NodeJS" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>NodeJS</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/html-example.gif"} alt="NodeJS" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                  }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/jquery-logo.png"} alt="Jquery" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>jQuery</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="jquery" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/mongodb-logo.png"} alt="Mongodb" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>MongoDB</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="Mongodb" />
                </AccordionDetails>
            </Accordion>

            <Accordion className="competencies__accordion-item  "sx={{ 
                    backgroundColor: "rgba(195, 196, 197, 0.466)",
                    boxShadow: 3
                }} >
                <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                    <ExpandMore />
                }>
                    <img src={"../assets/Postgresql_elephant.svg.png"} alt="Jquery" />
                    <Typography className="competencies__accordion-header competencies__accordion"><h4>PostgresSQL</h4></Typography>
                </AccordionSummary>
                <AccordionDetails >
                <img src={"../assets/javascript-example.gif"} alt="jquery" />
                </AccordionDetails>
            </Accordion>
      </div>  
    </section>
    </>
  )
}

export default Competencies