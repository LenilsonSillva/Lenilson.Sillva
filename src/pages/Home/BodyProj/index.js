import useWindowDimensions from "../../../dimensions.js";
import * as React from 'react'
import {Button, Typography, Box} from '@mui/material/';
import Carousel from 'react-material-ui-carousel'
import Gratable1 from '../../Repo/Proj/gratable/gratable1.png'
import Mail1 from '../../Repo/Proj/mail/gmail1.png'
import Chat1 from '../../Repo/Proj/chat/chat1.png'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function BodyProj() {

    const cores = ['rgb(3,169,244)', 'rgb(237,97,69)', 'rgb(14,237,187)', 'rgb(214,177,51)', 'rgb(97,57,237)']
    const cores2 = ['rgb(13,179,254)', 'rgb(247,107,79)', 'rgb(24,247,197)', 'rgb(224,187,61)', 'rgb(107,67,247)']
    // Azul, salmão, verde, amarelo, roxo

    const {t} = useTranslation()
    const { height, width } = useWindowDimensions();
    let navigate = useNavigate()

    const confWid = (width, height) => {
        if(width >= height) {
            return 'd-flex flex-row container-lg'
        } else{
            return 'd-flex flex-column container-lg'
        }
    }

    const hwPC = (value1, value2) => {
        return(
        (value1/100*height) + (value2/100*width)
        )
    //Função que recebe valores e determina o tamanho dos elementos com relação a altura e largura da tela
    }

    const contentCard = (item) => {
        if(width - height < 400){
            return 'center'
        } else
        if(item === 3) { 
            return 'flex-end'
        }else {
            return 'flex-start'
        }
    }

    const dados = [
        {id : 1, title : 'Gratable', description: t("BodyProj.gratableText"), img : Gratable1, imgSize : 'vertical'},
        {id : 2, title : 'Email', description: t("BodyProj.emailText"), img : Mail1, imgSize : 'vertical'},
        {id : 3, title : 'Mensagens', description: t("BodyProj.mensagensText"), img : Chat1, imgSize : 'vertical'}
    ];

  return (
    <div id='sobre' style={{minHeight: `${height}px`, backgroundColor: 'rgb(245,237,222)', alignItems: 'center', justifyContent: 'space-around', paddingBottom: width >= height ? 0.5/100*height + 0.25/100*width : 20, borderTopRightRadius: 12/100*width + 8/100*height}} class='d-flex flex-column'>
        <div style={{display: 'flex', height: 60, alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
            <p class='h2' style={{fontSize: width >= 200 && width < 330 ? 17 : width >= 330 && width < 500 ? 24 : width >= 500 ? hwPC(1.7,1.7) : 12}}>{t("BodyProj.about")}</p>
        </div>
        <div class={confWid(width,height)} style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
            <div class='container' style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <div>
                    <Typography variant='body2' textAlign='justify' fontSize={0.8/100*width + 1.5/100*height}>{t("BodyProj.text")}</Typography>
                </div>
                <div class='d-flex' style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button onClick={()=>{navigate('/projects', {replace: true})}} variant="text" style={{fontWeight: 'bold', marginTop: 3/100*width + 1/100*height, fontSize: 0.5/100*width + 1.1/100*height, color: '#03a9f4'}}>{t("BodyProj.btnAll")}</Button>
                </div>
            </div>
            <Box style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', marginLeft: height < width ? 50 : 0}}>
                {
                    width >= height
                        
                    ?   <Carousel animation='fade' interval={9000} sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column', width: 38/100*width, height: 70/100*height, paddingRight: 1}}>
                        {
                            dados.map((item)=> {
                                return (
                                    <Box id='box-carousel' key={item.id} style={{display: 'flex', flex: 1, paddingInline: 4, paddingBlock: 6, flexDirection: item.id === 2 || item.id === 3 ? 'row-reverse' : 'row', justifyContent: 'center', alignItems: 'center', height: 47/100*height, background: `linear-gradient(to bottom left, ${cores2[Math.floor(Math.random()*5)]} 40%, ${cores[Math.floor(Math.random()*5)]} 100%)`, borderRadius: 15}}>
                                        <Box style={{display: 'flex', flexDirection: 'column', justifyContent: contentCard(item.id), maxHeight: 45/100*height, height: 45/100*height, width: '45%', padding: 7}}>
                                            <Typography style={{fontSize: hwPC(1.2,1.2), marginBottom: hwPC(0,1.5), fontWeight: 'bold', alignText: 'center'}}>{item.title}</Typography>
                                            <Typography sx={{fontFamily: "Cursive"}} style={{fontSize: hwPC(1.1,0.6), marginBottom: hwPC(0,2.5), color: 'white'}}>{item.description}</Typography>
                                            <Button onClick={()=>{navigate('/projects', {replace: true})}} variant="outlined" style={{fontSize: hwPC(0.6,0.6), alignSelf: 'flex-start', color: 'white', borderColor: 'white',  maxWidth: 45, minWidth: hwPC(3.6,3.6), minHeight: hwPC(1.55,1.55), padding: 0}}>{t("BodyProj.btnMore")}</Button>
                                        </Box>
                                        <Box style={{display: 'flex', padding: 7, justifyContent: item.id === 1 ? 'center' : 'center', height: '100%', width: '65%', alignItems: 'center'}}>
                                            <img src={item.img} alt="Projects images examples" style={{ maxHeight: 44/100*height, maxWidth: '100%',borderRadius: 15, width: 'auto'}}/>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        </Carousel>
                    :   <Carousel navButtonsAlwaysInvisible={true} interval={9000} indicators={false} animation='fade' sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column', height: 'auto', width: 90/100*width, maxWidth: width > height/1.5 ? '75%' : '95%', paddingRight: 1, paddingBottom: 1}}>
                        {
                            dados.map((item)=>{
                                return (
                                    <Box id='box-carousel' key={item.id} style={{display: 'flex', flex: 1, flexDirection: 'column', padding: 10, height: '100%', background: `linear-gradient(to bottom left, ${cores2[Math.floor(Math.random()*5)]} 40%, ${cores[Math.floor(Math.random()*5)]} 100%)`, borderRadius: 15}}>
                                        <Box style={{display: 'flex', flex: 1, flexDirection: item.id === 3 ? 'row' : 'row-reverse', alignItems: 'center', justifyContent: 'space-around'}}>
                                            <Box style={{alignItems: 'center', justifyContent: 'center', display: 'flex', width: '30%', height: '100%', flexDirection: 'column'}}>
                                                <Typography style={{fontSize: hwPC(1.6,1.5), fontWeight: 'bold', alignText: 'center', color: 'white', marginBottom: 10}}>{item.title}</Typography>
                                                <Button onClick={()=>{navigate('/projects', {replace: true})}} variant="outlined" style={{fontSize: hwPC(1,0.5), color: 'white', borderColor: 'white', maxWidth: 45, minWidth: hwPC(6,3), padding: 0}}>{t("BodyProj.btnMore")}</Button>
                                            </Box>
                                            <Box style={{display: 'flex', flex: 1, width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                                <img src={item.img} alt="Project images examples" style={ item.imgSize === 'horizontal'? {maxWidth: '70%', borderRadius: 15, width: hwPC(28.5,0), height: 'auto'} : {maxWidth: '100%', borderRadius: 15, height: hwPC(17,17), width: 'auto'}}/>
                                            </Box>
                                        </Box>
                                        <Box style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: 5}}>
                                            <Typography style={{fontSize: hwPC(1.4,0.3), color: 'white'}}>{item.description}</Typography>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        </Carousel>
                }
            </Box>
        </div>
    </div>
  )
}
