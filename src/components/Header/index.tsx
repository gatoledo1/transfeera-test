import React from 'react'
import "./styles.scss";
import logotype from "../../assets/logos/transfeera.png"
import { useNavigate } from 'react-router-dom';

export const Header = ({type}) => {
  const navigate = useNavigate();
  //() => navigate(-1)
  return (
    <>
      <div className="headerLogo container">
        <img src={logotype} alt="logotype" />
      </div>
      <div className="nav">
        <div className="container">
          <nav>Seus favorecidos</nav>
        </div>
      </div>
    </>
  )
}
