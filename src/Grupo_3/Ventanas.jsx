import React, { useState } from 'react';
import './style.css';

function Ventana(props) {
    const[lucky,SetLucky]=useState(0)
    const [xArray, setXArray] = useState(Array.from({ length: 8 }, () => Math.random() * 1500));
    const [yArray, setYArray] = useState(Array.from({ length: 8 }, () => Math.random() * 1500));

    function borrar(x, y) {
        for (let i = 0; i < 8; i++) {
            if (x === xArray[i] && y === yArray[i]) {
                setTimeout(function() {
                    const newXArray = [...xArray];
                    newXArray[i] = Math.random() * 1500;
                    setXArray(newXArray);

                    const newYArray = [...xArray];
                    newYArray[i] = Math.random() * 1500;
                    setYArray(newYArray);

                }, Math.random() * 15000);
                const newXArray = [...xArray];
                newXArray[i] = -1000;
                setXArray(newXArray);
                if(i===4 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.airforce.com/careers/special-warfare-and-combat-support?adobe_mc=TS%3D1712346606%7CMCMID%3D04560168137884966732012772811273173431%7CMCORGID%3D9A3A4AEA5C01FFA90A495EEF%2540AdobeOrg&ds_rl=1280510&ds_rl=1280513&gad_source=1&ds_rl=1280513&gclid=Cj0KCQjw0_WyBhDMARIsAL1Vz8vlkmMhXqYWzqoonz_vkwykWvTUzPWdSpLt-MJHYqoxtPmEKr7R3QoaAqrMEALw_wcB&gclsrc=aw.ds"
                }
                if(i===3 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://spyhunter.enigmasoftware.com/es/virus-eliminar/?kw=remove%20virus&gad_source=1&gclid=Cj0KCQjw0_WyBhDMARIsAL1Vz8tLM_LmmMwIsPQQCaN-WpF1jJEE1lsTqevWSAvomw9_FXA78c0Vx40aAq7EEALw_wcB"
                }
                if(i===2 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://veepn.com/blog/提防虚假病毒警告弹出窗口：如何识别和避免它们/?lang=zh"
                }
                if(i===1 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.icegif.com/rick-roll-21/"
                }
                if(i===5 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.carrefour.com.ar/promociones"
                }
                if(i===6 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://medlineplus.gov/spanish/anxiety.html"
                }
                if(i===7 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.mayoclinic.org/es/diseases-conditions/anxiety/symptoms-causes/syc-20350961"
                }
                if(i===8 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.cun.es/enfermedades-tratamientos/enfermedades/ansiedad#:~:text=¿%20Cuáles%20son%20los%20síntomas%20de,temblores%20o%20miedo%20%20a%20morirse"
                }
                SetLucky(lucky+1)
            }
        }
    }

  
}

export default Ventana;