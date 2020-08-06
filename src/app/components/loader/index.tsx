import React from 'react'
import Loader from 'react-loader-spinner'


export default () => (
    <Loader
         type="MutatingDots"
         color="#4ab56c"
         height={100}
         width={100}
         timeout={0} //3 secs
      />
)