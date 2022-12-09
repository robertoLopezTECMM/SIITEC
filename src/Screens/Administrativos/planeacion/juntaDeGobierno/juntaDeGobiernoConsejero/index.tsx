import React, { useContext, useEffect, useState } from 'react'
import { LoadingSpinner } from '../../../../../Components/LoadingSpinner';
import { authContext } from '../../../../../Contexts/AuthProvider';
import { NavigatorConsejero } from '../../navigatorConsejero';
import { HeaderBottomBorder } from '../components/headerBottomBorder';
import TemaSesionItem from '../components/temaSesionItem';
import { useActualSession } from '../hooks/useActualSession';
import './index.css'

export const JuntaDeGobiernoConsejero = () => {

    const { auth }:any = useContext(authContext);
    const {actualSession, isLoading}:any = useActualSession()
    const [actualSessionState, setActualSessionState] = useState<any>()


  useEffect(() => {
    console.log(auth.token)
    console.log('isLoading: ', actualSession)
    setActualSessionState(actualSession)
  }, [actualSession])

  if(actualSession === undefined) return <LoadingSpinner visible/>
  return (
    <NavigatorConsejero>
        <div className="juntaGobiernoDetailsContainer">
            <HeaderBottomBorder
                title={actualSession.Titulo}
                subtitle={actualSession.fecha}
            />

            <br/>

            <div className='ordenDiaContainer'>
                {actualSession.Temas.map((tema:any)=>{
                    return <TemaSesionItem title={tema.Tema} url={''} hasSubtitles={false} subtitiles={[]} isExpandable={false} />
                })}
            </div>
        </div>
    </NavigatorConsejero>

  )
}
