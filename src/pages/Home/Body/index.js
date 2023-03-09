import useWindowDimensions from "../../../dimensions.js";
import myPhoto from "./principal.png";
import {Link} from 'react-scroll';
import React from "react";
import {Typography, Card, CardContent, CardActions, Skeleton} from '@mui/material/';
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'

export default function Body() {

    const { height, width } = useWindowDimensions();
    const [ itemIcon, setItemIcon ] = React.useState(false);
    const { t } = useTranslation();

    const confWid = (width, height) => {
        if(width >= height) {
            return 'd-flex flex-row'
        } else{
            return 'd-flex flex-column'
        }
    }

    const hwPC = (value1, value2) => {
        return(
        (value1/100*height) + (value2/100*width)
        )
    //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
    }

    const contentUp = {
        initial : {
        y: 100,
        bottom: 0,
        opacity: 0
        },
        animate : {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.87, 0, 0.13, 1],
        },
        },

    } 

  return (
    <div id='divBody' style={{height: `${height - 56}px`, minHeight: 250, backgroundColor: 'black', borderBottomLeftRadius: 12/100*width + 8/100*height}} class="d-flex flex-column align-items-center justify-content-center">
        <motion.section initial='initial' animate='animate' variants={contentUp} class={`container-lg ${confWid(width, height)}`} style={{alignItems: 'center', justifyContent: width > height ? 'space-evenly' : 'center', display: 'flex', marginTop: -50}}>
            <div style={{borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'blue'}}>
                <img onLoad={()=>{setItemIcon(true)}} src={myPhoto} class='img-fluid' alt="minhaFoto" style={{ display: itemIcon ? 'flex' : 'none', height: width > height ? hwPC(20,20) : height >= 350 && height < 450 ? 150 : height >= 450 && height < 550 ? 210 : height >= 550 && height < 650 ? 275 : height >= 650 && height < 750 ? 320 : height >= 750 && height < 850 ? 400 : height >= 850 && height < 950 ? 480 : height  >= 950 ? 550 : 80, width: 'auto'}}/>     
                <Skeleton animation="wave" sx={{bgcolor: 'grey.900'}} style={{display: itemIcon ? 'none' : 'flex', marginBottom: 15}} variant="rectangular" width={10/100*height + 17/100*width} height={height - (75/100*height) + (20/100*width)}/>
            </div>
            <Card id='card-body' variant="outlined" style={{backgroundColor: 'rgb(19,20,22)'}}>
                <React.Fragment>
                    <CardContent>
                    <Typography fontSize={hwPC(1.4,1.2)} color="rgb(220,220,230)" fontWeight='bold' gutterBottom>
                    {t("Body.hi")}
                    </Typography>
                    <Typography variant="h5" component="div" color="rgb(220,220,230)" fontWeight='bold' fontSize={ 2.2/100*width + 2.5/100*height}>
                        {t("Body.name")} <span id='textAnimCard' style={{ fill: 'currentcolor',fontFamily: "Sofia"}}>Lenilson</span>.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="rgb(220,220,230)" fontWeight='bold' fontSize={ 1.2/100*width + 1.4/100*height}>
                        {t("Body.welcome")}
                    </Typography>
                    </CardContent>
                    <CardActions sx={{alignItems: 'center', justifyContent: 'center'}}>
                        <Link to='sobre' smooth>
                        <button type="button" class="btn btn-outline-info">{t("Body.about")}</button>
                        </Link>
                    </CardActions>
                </React.Fragment>
            </Card>
        </motion.section>
    </div>
  )
}
