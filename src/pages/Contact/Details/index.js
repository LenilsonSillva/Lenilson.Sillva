import React from 'react';
import {Box, Typography, Link, Skeleton, Grid, Button} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import useWindowDimensions from "../../../dimensions.js";
import eu from './eu.jpg'
import pdf from './cur.pdf'
import pdf2 from './res.pdf'
import { useTranslation } from 'react-i18next';

export default function Details() {

  const {t} = useTranslation();
  const { width, height } = useWindowDimensions();
  const [ itemIcon, setItemIcon ] = React.useState(false);

  let avHeight = window.screen.height;
  let avWidth = window.screen.width;

  const hwPC = (value1, value2) => {
    return(
    (value1/100*height) + (value2/100*width)
    )
  //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
  }

  const sizes = (value) => {
      if (avHeight <= 100) {
        return value * 100}
      else if (avHeight > 100 && avHeight <= 250){
        return value * 250}
      else if (avHeight > 250 && avHeight <= 400){
        return value * 400}
      else if (avHeight > 400 && avHeight <= 550){
        return value * 550}
      else if (avHeight > 550 && avHeight <= 700){
        return value * 700}
      else if (avHeight > 700 && avHeight <= 850){
        return value * 850}
      else if (avHeight > 850 && avHeight <= 1000){
        return value * 1000}
      else if (avHeight > 1000){
        return value * 1000;
      }
  }

  return (
    <div style={{display: 'flex', flex: avWidth >= avHeight && avHeight > 600 ? 1.3 : 1, alignItems: 'center', justifyContent: avWidth >= avHeight && avHeight > 600 ? 'flex-end' : 'center', height:  avWidth >= avHeight && avHeight > 600 ? 'auto' : '90%', paddingBlock: avWidth >= avHeight && avHeight > 600 ? 0 : avWidth >= avHeight && avHeight <= 600 ? 25 : '6%'}}>
      <Box style={{display: 'flex', backgroundColor: 'rgb(210,185,140)', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 7, minHeight:avWidth >= avHeight && avHeight > 600 ? '80%' : sizes(0.71), width: avWidth >= avHeight && avHeight > 600 ? '92%' : '100%'}}>
        <Box style={{backgroundColor: 'rgb(245,237,222)', display: 'flex', flex: 1.6, flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'space-evenly', borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
          <Box style={{height: width > height ? sizes(0.2) : sizes(0.2), maxHeight: '90%', aspectRatio: 1/1, width: 'auto', borderRadius: 90, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img alt="It is me" onLoad={()=>{setItemIcon(true)}} src={eu} style={{display: itemIcon ? 'flex' : 'none',width: 'auto', maxHeight: '100%', padding: 0, margin: 0, borderRadius: sizes(0.2)/2}}/>
            <Skeleton animation="wave" style={{display: itemIcon ? 'none' : 'flex', maxHeight: '100%', position: 'absolute', padding: 0, margin: 0}} variant="circular" width={width > height ? hwPC(8,8) : hwPC(15,6)} height={width > height ? hwPC(8,8) : hwPC(15,6)}/>
          </Box>
          <Box style={{display: 'flex', flexDirection: 'column', maxHeight: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontSize={avWidth >= avHeight ? sizes(0.034) : sizes(0.025)} fontWeight='bold' style={{fontFamily: "Sofia"}}>Lenilson Silva de Oliveira</Typography>
            <Typography fontSize={avWidth >= avHeight ? sizes(0.021) : sizes(0.018)} sx={{color: 'rgb(90,90,90)'}}>{t("Details.dev")}</Typography>
          </Box>
        </Box>
        <Box style={{display: 'flex', backgroundColor: 'rgb(245,237,222)', flex: 1.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, paddingBottom: 20}}>
      <Grid sx={{ flexGrow: 1}} container style={{backgroundColor: 'rgb(210,185,140)', justifyContent: 'center', borderRadius: 30, marginInline: 10}}>
            <Grid item>
              <Link href="http://www.linkedin.com/in/lenilson-sillva" target='blank' rel='LinkedIn' title="LinkedIn"><LinkedInIcon id="btnSN" style={{margin: sizes(0.011), color: "#0e76a8", padding: 2}}/></Link>
            </Grid>
            <Grid item>
              <Link href="https://wa.me/558487631618"  target='blank' rel='WhatsApp'><WhatsAppIcon id="btnSN" style={{margin: sizes(0.011), color: "#25d366", padding: 2}}/></Link>
            </Grid>
            <Grid item>
              <Link href="http://www.instagram.com/lenilson.sillva"  target='blank' rel='Instagram'><InstagramIcon id="btnSN" style={{margin: sizes(0.011), color: "#E1306C", padding: 2}}/></Link>
            </Grid>
            <Grid item >
              <Link href="http://www.facebook.com/lenilson.sillva"  target='blank' rel='Facebook'><FacebookIcon id="btnSN" style={{margin: sizes(0.011), color: "#3b5998", padding: 2}}/></Link>
            </Grid>
            <Grid item>
              <Link href='mailto:lenilson.silva.016@ufrn.edu.br' onClick={() => navigator.clipboard.writeText('lenilson.silva.016@ufrn.edu.br') }><EmailIcon id="btnSN" style={{margin: sizes(0.011), color: "#EA4335", padding: 2}}/></Link>
            </Grid>
            <Grid item>
              <Link href='tel:+558433226225' onClick={() => navigator.clipboard.writeText('+55(84)3322-6225') }><PhoneIcon id="btnSN" style={{margin: sizes(0.011), color: "#4285F4", padding: 2}}/></Link>
            </Grid>
        </Grid>
        </Box>
        <Box style={{display: 'flex', flex: 0.3, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <Button color='inherit' variant='contained' href={ useTranslation().i18n.language === 'pt' ? `${pdf}` : `${pdf2}`} target='blank' sx={{borderRadius: 5, fontSize: 12, fontWeight: 'bold', backgroundColor: '#03a9f4', color: 'white', fill: 'currentColor', paddingInline: 0.8, paddingBlock: 0.5}}>{t("Details.cur")}</Button>
        </Box>
      </Box>
    </div>
  )
}
