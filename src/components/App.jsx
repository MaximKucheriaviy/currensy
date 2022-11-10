import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { CurrensyExchage } from "pages/CureensyExchage";
import { NavBarr } from "./NavBar/NavBarr";
import { getPosionInfo, getAllNames } from "service/CurrencyApi";
import { useState, useEffect } from "react";
import { setRates } from "redux/slyses";
import { useDispatch } from "react-redux";




export const App = () => {
  const [base, setBase] = useState("");
  const dispatch = useDispatch();
  if(!base){
    window.navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(position);
      getPosionInfo(position.coords.latitude, position.coords.longitude )
      .then(result => {
        console.log(result.results[0].annotations.currency.iso_code);
        setBase(result.results[0].annotations.currency.iso_code)
      })
      .catch(error => console.log('error', error));
      
    },() => {
      setBase("USD");
    })
  }
  

  useEffect(() => {
    if(!base){
      return;
    }
    getAllNames()
    .then(result => {
      dispatch(setRates(result.symbols));
    })
    .catch(error => console.log('error', error));
  }, [base, dispatch])
  

  return (
    <div>
      <NavBarr/>
      <Routes>
        <Route path="/" element={<Home base={base}/>}/>
        <Route path="/exchage" element={<CurrensyExchage base={base}/>}/>
      </Routes>
    </div>
  );
};
