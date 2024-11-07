'use client'

import { useEffect, useState } from 'react'
import tips from '@/mocks/mock-tips/tips.json'
import { TitleComponent, TextComponent } from '@/components/Typography'
import { TipProps } from '@/types';
import { ContainerCardTips, ContainerWrapper } from './style'
import Link from '@/components/Link';

const DailyTips = () => {
    const [tipOfDay, setTipOfDay] = useState<TipProps | null>(null)

    useEffect(() => {
        const getTipOfDay = () => {
            const today = new Date().toISOString().slice(0, 10)
            const previousTipDate = localStorage.getItem('dateTips')
            const indexPreviousTip = localStorage.getItem('indexTip')

            if (previousTipDate === today && indexPreviousTip) {
                setTipOfDay(tips[parseInt(indexPreviousTip)]);
                return;
            }

            let indexTip
            const usedTips = JSON.parse(localStorage.getItem('usedTips') || '[]') 


            do {
                indexTip = Math.floor(Math.random() * tips.length)
            } while (usedTips.includes(indexTip))

            usedTips.push(indexTip)
            if(usedTips.length > 100){
                usedTips.shift()
            }

            localStorage.setItem('usedTips', JSON.stringify(usedTips));
            localStorage.setItem('dateTips', today);
            localStorage.setItem('indexTip', indexTip.toString());

            setTipOfDay(tips[indexTip])
        }

        getTipOfDay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContainerWrapper>
          <TitleComponent as="h4">Dicas de Segurança Diárias</TitleComponent>
          <TextComponent as="p">Veja dicas diárias para garantir sua saúde, segurança e bem-estar.</TextComponent>
          {tipOfDay && (
            <ContainerCardTips className="dica-card">
              <h3>&quot;{tipOfDay.tip}&quot;</h3>
              <Link href={tipOfDay.referenceLink}>
                Saiba mais
              </Link>
            </ContainerCardTips>
          )}
        </ContainerWrapper>
      );
    };
    
export default DailyTips;