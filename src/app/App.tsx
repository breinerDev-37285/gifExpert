import React,  { useState } from 'react'
import Category from './components/Category'
import Giflist from './components/gifsList'
import './App.scss'

const App = () => {

    const [category, setCategory] = useState(['rick and morty'])

    return (


        <div>
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Aplicación GIF</h1>
                        <h2 className="subtitle">aplicacion de prueba para react</h2>
                        <hr/>
                    </div>
                </div>
            </section>

            <div className="hero-body containerDiv">
                <Category category={setCategory}/>
                <ul>
                    { category.map((elem) => (
                        <Giflist 
                            key={elem}
                            category={elem}
                        />
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default App