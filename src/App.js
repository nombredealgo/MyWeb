import './App.css';
import * as React from 'react';
import {useState} from 'react';
import {Drawer,Divider,Button,Box} from '@mui/material';
import Juego from './Juego';
import juegos from './juegos.json';


function App() {

  let listaJuegos = juegos;
  const [juegoActual,setjuegoActual] = useState(0);

  const drawerWidth = 240;
  const drawerHeight = 120;  

  const onClikBBB= function(evento){setjuegoActual(0);}
  const onClikPN= function(evento){setjuegoActual(1);}
  const onClikWaD= function(evento){setjuegoActual(2);}
  const onClikTaD= function(evento){setjuegoActual(3)}

  return (     

    <Box className = {listaJuegos[juegoActual].cssBackground}  sx={{ display: 'flex' }} >      
         
         <Drawer sx={{ width: drawerWidth, flexShrink: 1, 
              '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', backgroundColor: listaJuegos[juegoActual].drawerColor},
              }}
        variant="permanent"
        anchor="left"      
      >

          <Box sx={{width:drawerWidth, height:drawerHeight,backgroundColor:'black'}}>
          <img src="titulos/MMGTitulo.png" alt='Imagen del titulo'/>
          </Box> 

          <Divider />
          <Box sx={{width:drawerWidth, height:80,backgroundColor:'black'}}>
          <img src="titulos/ClickToSee.png" alt='Imagen del titulo'/>
          </Box>         
                 
          <Divider />
          <Box sx={{width:drawerWidth, height:drawerHeight, backgroundImage :"url('titulos/BBBTitulo.png')", backgroundRepeat: "no-repeat"}}>
          <Button onClick={onClikBBB} sx={{width:drawerWidth, height: drawerHeight}}></Button>
          </Box> 

          <Divider/>
          <Box sx={{width:drawerWidth, height:drawerHeight, backgroundImage :"url('titulos/PNTitulo.png')", backgroundRepeat: "no-repeat"}}>
          <Button onClick={onClikPN} sx={{width:drawerWidth, height: drawerHeight}}></Button>
          </Box>   

          <Divider />
          <Box sx={{width:drawerWidth, height:drawerHeight, backgroundImage :"url('titulos/WaDTitulo.png')", backgroundRepeat: "no-repeat"}}>
          <Button onClick={onClikWaD} sx={{width:drawerWidth, height: drawerHeight}}></Button>
          </Box>

          <Divider />
          <Box sx={{width:drawerWidth, height:drawerHeight, backgroundImage :"url('titulos/TaDTitulo.png')", backgroundRepeat: "no-repeat"}}>
          <Button onClick={onClikTaD} sx={{width:drawerWidth, height: drawerHeight}}></Button>
          </Box> 
          
      </Drawer>
        
          <Juego  imgTituloLargo={listaJuegos[juegoActual].imgTituloLargo} 
                  video={listaJuegos[juegoActual].video}
                  titulo={listaJuegos[juegoActual].titulo}
                  descripcion={listaJuegos[juegoActual].descripcion}
                  enlaceGithub={listaJuegos[juegoActual].enlaceGithub}
                  cssBackground={listaJuegos[juegoActual].cssBackground}
                  drawerColor={listaJuegos[juegoActual].drawerColor}
                  githubMsg={listaJuegos[juegoActual].githubMsg}
          />
          
          
    </Box>       
  
  );
}

export default App;

