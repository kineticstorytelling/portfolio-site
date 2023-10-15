import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from "@mui/icons-material"

const Competencies = () => {
  return (
    <>
    <section className="competencies">
        <h2 className='competencies__title'>Competencies</h2>
        <div className="comptencies__category">

          <div className="competencies__category--label"><h3>Languages</h3></div>
              <Accordion className="competencies__accordion-item  "sx={{ 
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
        </div>
    </section>
    </>
  )
}

export default Competencies