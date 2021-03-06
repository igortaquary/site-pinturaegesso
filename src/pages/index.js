import React from 'react'
import Home from './home/index.js'
import Helmet from 'react-helmet'

import img from './../assets/atendente.jpg'

const index = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service: pintura, gesso e elétrica</title>
                <link rel="canonical" href="https://servicepinturaegesso.netlify.app/" />
                <meta property="og:title" content="Service: pintura, gesso e elétrica" />
                <meta property="og:type" content="site" />
                <meta property="og:description" content="A Service é uma empresa especializada em serviços de pintura, manutenção, gesso e acabamento em geral." />
                <meta property="og:url" content="https://servicepinturaegesso.netlify.app/" />
                <meta property="og:image" content={img} />
            </Helmet>
            <Home></Home>
        </>
    )

}

export default index;