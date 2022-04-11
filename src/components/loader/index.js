import React from 'react'
import Loadergif from '../images/XC1F.gif';
import { LoaderContainer,LoaderImg } from './loaderElements';
const Loader = () => {
  return (
      <LoaderContainer>
          <LoaderImg src={Loadergif}/>
    </LoaderContainer>
  )
}

export default Loader