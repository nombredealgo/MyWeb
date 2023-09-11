import {Container,Fab} from '@mui/material';
import ReactPlayer from 'react-player';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Grid from '@mui/material/Unstable_Grid2';


export default function Juego(props){

  return (
    <>
      <Grid container  spacing={2} alignContent="center">
        <Grid item xl={12}>        
          <img src={props.imgTituloLargo} alt='Imagen del titulo'/>        
        </Grid>
        <Grid item xl={12} xlOffset={3} >
          <ReactPlayer url ={props.video} controls/>
          </Grid>
        <Grid item xl={8} xlOffset={1} >        
          <Container maxWidth="md" sx ={{height:100,backgroundColor:props.drawerColor, color:'white', borderRadius: '16px'}}>        
            <br/>
            {props.titulo} <br/> 
            {props.descripcion}
          </Container>       
        </Grid>
        <Grid item xl={3} >
          <Fab variant="extended" color='white' href={props.enlaceGithub} target="_blank" sx={{ color:'black'}} >
            <FileDownloadIcon sx={{ mr: 1 }} />
            {props.githubMsg}
          </Fab>
        </Grid>      

      </Grid>    
    </>
    );
}