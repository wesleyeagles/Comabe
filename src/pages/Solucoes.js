import React, { useState } from 'react'
import {motion} from "framer-motion"
import ButtonPrimary from '../components/ButtonPrimary'

import ModalYoutube from '../components/ModalYoutube'
import HomemComCelular from '../images/Outsourcing/HomemComCelular.png'
import Celular from '../images/Outsourcing/Celular.png'
import HomemMechendoEmImpressora from '../images/Outsourcing/HomemMechendoEmImpressora.png'
import ContactImageOutsourcing from '../images/Outsourcing/ContactImageOutsourcing.png'

import '@vime/core/themes/default.css';
import { Player, Youtube, DefaultUi } from '@vime/react';

import {ReactComponent as DotsLeft} from '../images/Outsourcing/dotsLeft.svg'
import {ReactComponent as DotsRight} from '../images/Outsourcing/dotsRight.svg'

import {ReactComponent as DocumentosExclamation} from '../images/Outsourcing/DocumentosExclamation.svg'
import {ReactComponent as DocumentosUp} from '../images/Outsourcing/DocumentosUp.svg'
import {ReactComponent as DocumentosDown} from '../images/Outsourcing/DocumentosDown.svg'
import {ReactComponent as Money} from '../images/Outsourcing/Money.svg'
import {ReactComponent as Relatorios} from '../images/Outsourcing/Relatorios.svg'
import {ReactComponent as ImpressoraExclamation} from '../images/Outsourcing/ImpressoraExclamation.svg'
import {ReactComponent as TonnerExclamation} from '../images/Outsourcing/TonnerExclamation.svg'
import {ReactComponent as MultifuncionalExclamation} from '../images/Outsourcing/MultifuncionalExclamation.svg'
import {ReactComponent as CompareArrows} from '../images/Outsourcing/CompareArrows.svg'
import {ReactComponent as GreenCheck} from '../images/GreenCheck.svg'
import {ReactComponent as Monitor} from '../images/Outsourcing/Monitor.svg'
import {ReactComponent as ImpressoraMoney} from '../images/Outsourcing/ImpressoraMoney.svg'
import {ReactComponent as NuvemCadeado} from '../images/Outsourcing/NuvemCadeado.svg'
import {ReactComponent as DocUp} from '../images/Outsourcing/DocUp.svg'
import ContactBox from '../components/ContactBox'
import Navbar from '../components/Navbar'
import Utilities from '../components/Utilities'
import Footer from '../components/Footer'




function Solucoes() {

  const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }, 200)
}

  const [openVideo, setOpenVideo] = useState(0)

  const toggleVideo = () => {
    setOpenVideo(!openVideo)
  } 


  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.8} }} exit={{opacity: 0, transition: {duration: 0.1} }}>
    <Navbar />
    <div className='bg-hero-bg-solu????es w-full py-36 flex items-center'>
    <div className='container mx-auto'>
        <div className='w-full lg:w-[50%]'>
          <h1 className='text-4xl text-white font-medium mb-[30px]'>Impress??o e gest??o de documentos f??sicos e digitais</h1>
          <p className='text-white text-sm font-light w-[85%] mb-[55px]'>A Comabe vem ao longo dos anos trabalhando para entregar a voc?? o que h?? de melhor em tecnologia, buscando oferecer uma experi??ncia ??nica relacionada a solu????es de impress??o e gest??o de documentos. </p>
          <ButtonPrimary text='Conhe??a nosso fluxo de monitoramento' color='transparent' linkRef='/solu%C3%A7%C3%B5es#monitoramento'/>
        </div>

      </div>
    </div>

    <div className='bg-[#F8F8FA] py-36 flex items-center' id='outsourcing'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='relative w-full lg:w-[45%] h-[385px]'>
            <Player>
            <Youtube videoId="wmSQIAWXXaM" />

            <DefaultUi>
            </DefaultUi>
            </Player>
            </div>

            <ModalYoutube video="https://www.youtube.com/embed/AzTuyu-zAGI" onClick={toggleVideo} Close={`${openVideo? 'scale-1' : 'scale-0'}`}/>

            <div className='w-full lg:w-[48%]'>
              <h2 className='text-3xl text-[#343434] font-medium w-[80%] mb-[40px] mt-10 lg:mt-0'>Outsourcing de impress??o</h2>
              <p className='text-sm text-[#343434] font-light w-[95%]'>Aqui voc?? conta com planos corporativos de impress??o personalizados para sua empresa, que visam otimizar a estrutura de opera????o do seu neg??cio atrav??s de solu????es simples e ajust??veis.</p>
              <p className='text-sm text-[#343434] font-light mt-[30px] mb-[40px]'>Contamos tamb??m com monitoramento remoto do seu equipamento,  onde avisamos para voc?? antes que os seus suprimentos acabem, assim, voc?? n??o tem a preocupa????o com a reposi????o e troca de seus suprimentos.</p>
              <ButtonPrimary onClick={scrollToTop} text='Agendar visita' color='ButtonPrimary' linkRef={'/contato'}/>
            </div>
        </div>
      </div>
    </div>

    <div className='py-36 lg:py-0 lg:pt-[150px] lg:pb-[180px]' id='monitoramento'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-[55%]'>
          <h2 className='text-3xl text-[#343434] font-medium w-[80%] mb-[40px]'>Vantagens do monitoramento de impressoras</h2>
          <p className='text-sm text-[#343434] font-light mb-[30px] w-[75%]'>Ajudamos voc?? e sua empresa a ter mais controle sobre seu ambiente de impress??o e facilidade em diversos processos que ir??o tornar a sua rotina mais ??gil e din??mica</p>
          <div className='flex flex-col gap-[10px]'>
            <span className='flex items-center gap-[20px] text-sm text-[#575757] font-medium'><DocumentosExclamation />Controle de volume de impress??o</span>
            <span className='flex items-center gap-[20px] text-sm text-[#575757] font-medium'><DocumentosUp />Melhorias no processo de impress??o</span>
            <span className='flex items-center gap-[20px] text-sm text-[#575757] font-medium'><DocumentosDown />Racionaliza????o no uso de recursos</span>
            <span className='flex items-center gap-[20px] text-sm text-[#575757] font-medium'><Money />Distribui????o de custos por usu??rio</span>
          </div>
          </div>

          <div>
            <img src={HomemComCelular} alt='' />
          </div>
        </div>

       

        <div className='flex justify-center relative max-w-4xl mx-auto mt-10 lg:mt-0'>
          <DotsLeft className='hidden lg:block lg:w-31w 2xl:w-auto absolute -left-[25px] top-1/2'/>
          <div className='bg-white w-[370px] h-[210px] flex flex-col gap-[20px] justify-center items-center shadow-shadow-card'>
            <Relatorios />
            <p className='text-center w-[90%] lg:w-auto text-sm text-[#575757] font-light'>Nossos clientes recebem <span className='font-bold text-[#0F5197]'>relat??rios</span> com informa????es que auxiliam em tomada de decis??es.</p>
          </div>
          <DotsRight className='hidden lg:block lg:w-30w 2xl:w-auto absolute -right-[25px]'/>
        </div>

        <div className='flex flex-col lg:flex-row justify-between pt-[100px]'>
          <div className='w-full lg:w-[45%]'>
            <img src={Celular} alt='' />
          </div>

          <div className='w-full lg:w-[48%]'>
          <h2 className='text-3xl text-[#343434] font-medium w-[70%] lg:w-[80%] mb-[40px]'>Monitoramento do cliente</h2>
          <p className='text-sm text-[#343434] font-light mb-[60px] w-[100%]'>Atrav??s de um sistema remoto, monitoramos todos os equipamentos da sua empresa - at?? mesmo as filiais - e recebe alertas sobre poss??veis problemas de funcionamento, limites de impress??o por funcion??rio ou qualquer outra opera????o, tendo um relat??rio claro do que acontece em suas m??quinas.</p>
          <div className='flex flex-wrap gap-5 lg:gap-10 2xl:gap-[10px] mb-[90px]'>
            <span className='flex w-full 2xl:w-auto items-center gap-[20px] text-sm text-[#575757] font-medium mr-[100px]'><ImpressoraExclamation className='w-[17%] lg:w-auto'/>Impressora sem toner</span>
            <span className='flex w-full 2xl:w-auto items-center gap-[20px] text-sm text-[#575757] font-medium'><TonnerExclamation className='w-[13%] lg:w-auto'/>Problema no equipamento</span>
            <span className='flex w-full 2xl:w-auto items-center gap-[20px] text-sm text-[#575757] font-medium 2xl:mt-[50px]'><MultifuncionalExclamation className='w-[13%] lg:w-auto'/>Funcion??rio X imprimiu<br></br> sua cota mensal / semanal</span>
          </div>
          <ButtonPrimary onClick={scrollToTop} text='Agendar visita' color='ButtonPrimary' linkRef={'/contato'}/>
          </div>
        </div>



      <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center py-36'>
        <div className='w-full lg:w-[550px] 2xl:w-[680px] h-[300px] bg-[#F8F8FA] rounded-2xl flex flex-col pt-[50px] pl-[30px] lg:pl-[80px]'>
          <span className='flex items-center gap-[10px] text-xl text-[#0F5197] font-medium h-[50px]'><GreenCheck />Digitaliza????o de documentos</span>
          <p className='text-sm text-[#575757] font-light w-[83%] mt-[50px]'>Acabe com o excesso de papel e tenha todos os seus documentos a poucos cliques, acessando os arquivos a partir de qualquer lugar atrav??s de uma busca simplificada.</p>
        </div>
        <CompareArrows className='hidden lg:block'/>
        <div className='w-full lg:w-[550px] 2xl:w-[680px] h-[300px] bg-[#F8F8FA] rounded-2xl flex flex-col pt-[50px] pl-[30px]  lg:pl-[80px]'>
          <span className='flex items-center gap-[10px] text-xl text-[#0F5197] font-medium h-[50px]'><GreenCheck />Integra????o via ERP's</span>
          <p className='text-sm text-[#575757] font-light w-[83%] mt-[50px]'>Permite realizar os comandos do equipamento direto pelo sistema interno da sua empresa de forma sincronizada, atrav??s de uma integra????o pensada para fornecer uma gest??o mais simplificada do processo.</p>
        </div>
      </div>

    

      </div>
    </div>

    <div className='flex items-center bg-gradiente-blue py-36'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
          <h2 className='text-2xl text-white font-medium w-full lg:w-[50%]'>A Comabe tamb??m monitora seus equipamentos para que voc?? tenha vantagens como:</h2>
        </div>

        <div className='flex flex-wrap gap-5 lg:gap-0 justify-between mt-[65px]'>
          <div className='bg-white w-[47%] lg:w-[290px] 2xl:w-[325px] h-[190px] rounded-2xl flex flex-col justify-center items-center gap-[20px]'>
              <Monitor />
              <p className='text-sm font-medium text-[#575757] w-[80%] text-center'>Agilidade na detec????o e resolu????o de falhas e paradas</p>
          </div>
          <div className='bg-white w-[47%] lg:w-[290px] 2xl:w-[325px] h-[190px] rounded-2xl flex flex-col justify-center items-center gap-[20px]'>
              <ImpressoraMoney />
              <p className='text-sm font-medium text-[#575757] w-[80%] text-center'>Redu????o de custos operacionais</p>
          </div>
          <div className='bg-white w-[47%] lg:w-[290px] 2xl:w-[325px] h-[190px] rounded-2xl flex flex-col justify-center items-center gap-[20px]'>
              <NuvemCadeado />
              <p className='text-sm font-medium text-[#575757] w-[80%] text-center'>Seguran??a no armazenamento e comunica????o de dados</p>
          </div>
          <div className='bg-white w-[47%] lg:w-[290px] 2xl:w-[325px] h-[190px] rounded-2xl flex flex-col justify-center items-center gap-[20px]'>
              <DocUp />
              <p className='text-sm font-medium text-[#575757] w-[80%] text-center'>Otimiza????o dos estoques de suprimentos e consum??veis</p>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center py-36'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div>
            <img src={HomemMechendoEmImpressora} alt='' />
          </div>

          <div className='w-full lg:w-[55%] mt-10 lg:mt-0'>
          <h2 className='text-3xl text-[#343434] font-medium w-[80%] mb-[30px]'>Monitoramento do cliente</h2>
          <p className='text-sm text-[#343434] font-light mb-[60px] w-[83%]'>Atrav??s da Nuvem (Internet) a Comabe recebe informa????es de problemas e falta de suprimentos de suas filiais. Seus equipamentos s??o monitorados, ficando sob responsabilidade da equipe da Comabe quaisquer falhas ou falta de suprimentos</p>  
          <span className='flex items-center gap-[20px] text-xl text-[#0F5197] font-medium'><GreenCheck /> Monitoramento de suprimentos</span>
          <p className='text-sm text-[#343434] font-light mt-[30px] mb-[40px] w-[83%]'>A Comabe identifica no sistema a falta de toner ou outro suprimento e envia um de seus colabores para efetuar a entrega e instala????o do recurso.</p>
          <span className='flex items-center gap-[20px] text-xl text-[#0F5197] font-medium'><GreenCheck /> Assist??ncia t??cnica</span>
          <p className='text-sm text-[#343434] font-light mt-[30px] w-[83%]'>A Comabe aciona imediatamente a Assit??ncia T??cnica quando identificar falhas ou paradas no funcionamento dos equipamentos.</p>
          </div>
        </div>
      </div>

    </div>

    <ContactBox onClick={scrollToTop} contactLink="/contato" imagem={ContactImageOutsourcing} title="Gostou e quer saber mais sobre nossas solu????es?" text="Muitos neg??cios e empresas est??o passando por importantes mudan??as, e a Comabe quer estar junto nesta transforma????o digital!" buttonText="Entre em contato e solicite uma cota????o"/>
    
    
    <Utilities />
    <Footer />
    </motion.div>
  )
}

export default Solucoes