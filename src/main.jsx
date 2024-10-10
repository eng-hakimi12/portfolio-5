import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Portfolio from './Component/Portfolio'
import Header from './Header'
import Footer1 from './Component/Footer1'
import Skills from './Component/Skills'
import Project from './Component/Project'
import Team from './Component/Team'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Portfolio />
    <Header />
    <Footer1 />
    <Skills />
    <Project />
    <Team />
  </div>
  
)
