import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {Box, TextField, Typography, Slide, Alert, Snackbar} from '@mui/material';
import { LoadingButton } from '@mui/lab'
import { useTranslation } from 'react-i18next';

export default function Email() {

    const {t} = useTranslation();
    const form = useRef();
    const [loadButton, setLoadButton] = React.useState(false);
    const [fieldName, setFieldName] = React.useState('');
    const [fieldEmail, setFieldEmail] = React.useState('');
    const [fieldMsg, setFieldMsg] = React.useState('');
    const [openErrorNet, setOpenErrorNet] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [alert1, setAlert1] = React.useState(false);
    const [alert2, setAlert2] = React.useState(false);
    const [alert3, setAlert3] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    const sendEmail = (event) => {
      event.preventDefault();

      fieldName === '' ? setAlert1(true) : setAlert1(false)
      fieldEmail === '' ? setAlert2(true) : setAlert2(false)
      fieldMsg === '' ? setAlert3(true) : setAlert3(false)
  
      if( (fieldName === '') || (fieldEmail === '') || (fieldMsg === '')){

        handleClick(TransitionUp, 1)

        } else {
          setLoadButton(true)

        emailjs.sendForm('LeniWebsite', 'template_ayi3h9p', form.current, 'aIMs2zhF81gBNydGz')
          .then((result) => {
              setLoadButton(false);
              event.target.reset();
              setFieldName(''); setFieldEmail(''); setFieldMsg('');
              handleClick(TransitionUp, 2);
          }, (error) => {
              setLoadButton(false);
              error.status === 0 ? handleClick(TransitionUp, 4) : handleClick(TransitionUp, 3)
          });
        }
    };

    function TransitionUp(props) {
      return <Slide {...props} direction="up" />;
    }

    const handleClick = (Transition, value) => {
        setTransition(() => Transition);

        value === 1 ? setOpen(true) : value === 2 ? setOpenSuccess(true) : value === 3 ? setOpenError(true) : setOpenErrorNet(true)
    }

    const handleClose = () => {
        setOpen(false);
        setOpenSuccess(false);
        setOpenError(false)
    }

    let avHeight = window.screen.height;
    let avWidth = window.screen.width;

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
      <div style={{display: 'flex', flex: avWidth >= avHeight && avHeight > 600 ? 1 : 0, alignItems: 'center', justifyContent: 'center', marginBottom: avWidth >= avHeight && avHeight > 600 ? 0 : avHeight <= 600 ? sizes(0.029) : sizes(0.029)}}>
          <form style={{display: 'flex', backgroundColor: 'rgb(245,237,222)', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', padding: 15, borderRadius: 7, height: '80%', width: avWidth >= avHeight && avHeight > 600 ? '80%' : `100%`, maxWidth: '100%', minWidth: '60%'}} ref={form} onSubmit={sendEmail}>
            <Typography sx={{color: 'black', textAlign: 'center'}} fontSize={avWidth >= avHeight ? sizes(0.029) : sizes(0.022)} fontWeight='bold'>{t("Email.title")}</Typography>
            <Box style={{display: 'flex', flexDirection: avWidth > avHeight * 1.6 && avHeight <= 600 ? 'row' : 'column', width: '100%', alignItems: 'center', justifyContent: 'space-between', height: '25%'}}>
              <TextField 
                value={fieldName}
                onChange={(event)=>{setFieldName(event.target.value)}} 
                error={fieldName === '' ? alert1 : false} 
                sx={{width: '100%', input: { height: sizes(0.025)}, marginRight: avWidth > avHeight * 1.6 && avHeight <= 600 ? 1 : 0}} 
                margin='dense'
                size='normal'
                id="standard-basic1" 
                label={t("Email.name")} 
                variant="filled" 
                name="name" 
                type="text"
              />
              <TextField 
                value={fieldEmail} 
                size='normal' 
                onChange={(event)=>{setFieldEmail(event.target.value)}} 
                error={fieldEmail === '' ? alert2 : false} 
                sx={{width: '100%', input: { height: sizes(0.025)}}} 
                margin='dense' 
                id="standard-basic" 
                label={t("Email.email")} 
                variant="filled" 
                name="email" 
                type="email"
              />
          </Box>
            <TextField 
              value={fieldMsg} 
              size='normal' 
              onChange={(event)=>{setFieldMsg(event.target.value)}} 
              error={fieldMsg === '' ? alert3 : false} 
              style={{width: '100%', input: { height: sizes(0.025)}}} 
              margin='dense' 
              id="standard-multiline-static" 
              label={t("Email.mes")} 
              multiline rows={ (avHeight < 500) && (avHeight > 350) ? 3 : avHeight <= 350 ? 1.5 : 4 } 
              variant="filled" 
              name="message"
            />
            <LoadingButton style={{backgroundColor: '#03a9f4', width: '100%', marginTop: avWidth > avHeight * 1.6 && avHeight <= 600 ? 10 : 10}} variant='contained' size='small' loading={loadButton} type="submit" value="Send">{t("Email.send")} </LoadingButton>
          </form>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%'}}>
                {t("Email.alertFill")}
            </Alert>
          </Snackbar>
          <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {t("Email.alertSent")}
              </Alert>
          </Snackbar>
          <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {t("Email.alertError")}
              </Alert>
          </Snackbar>
          <Snackbar open={openErrorNet} autoHideDuration={6000} onClose={handleClose} TransitionComponent={transition}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {t("Email.alertNet")}
              </Alert>
          </Snackbar>
      </div>
    );
}
