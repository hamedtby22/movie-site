import React, { useState } from 'react';
import { AppBar, Box, Button, FormControl, FormControlLabel, FormGroup, IconButton, MenuItem, Select,
    Stack, Switch, Tooltip, Typography, ListItemButton, Divider, ListItem, ListItemText, ListItemIcon,
    List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

//icon
import HomeIcon from '@mui/icons-material/HomeOutlined';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FilmIcon from '@mui/icons-material/TheatersOutlined';
import SerialIcon from '@mui/icons-material/LiveTvOutlined';
import ArtistIcon from '@mui/icons-material/TheaterComedyOutlined';
import ContactIcon from '@mui/icons-material/HeadsetMicOutlined';
import Login from '@mui/icons-material/LoginOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

//components
import InputSearch from './InputSearch';

//styles
import './Navbar.scss';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#FFEA11',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#FFEA11',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));


const Navbar = ({setTransparent,transparent}) => {

    const history = useNavigate();

    const [open, setOpen] = useState(false);
    const [searchBox,setSearchBox] = useState('')
    const [type,setType] = useState('');

    const transChange = (e) => {
      setTransparent(!transparent)
    }

    const typeHandler = (event) => {
      setType(event.target.value)
    }

    const handleSearch = (e) => {
      const srch = e.target.value;
      setSearchBox(srch.toLowerCase())
    }

    const SearchType = () => {
      history(`/search/${type}/${searchBox}`);
      if(type === '' || searchBox === '') {
        alert('فیلد نوع ویدیو را پر کنید');
    }
}
    const handleSignUp = () => {
      history('/sign-up')
    }
    const handleLogin = () => {
      history('/login')
    }

    const handleMenu = () => {
      setOpen(!open)
    }

    return (
      <>
        <Box className='menu'>
          {
              !open ? (<>
              <MenuIcon color='warning' onClick={handleMenu} sx={{width:'30px', height:'30px', p:'10px 10px 0 10px'}} />
              <Stack direction='row' className='appbar'>
                      <FormControl 
                      sx={{ m: 1, minWidth: 90, backgroundColor:'#fff', borderRadius:'5px'}} size='small' color='warning'>
                          <Select
                            variant='outlined'
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={type}
                            onChange={typeHandler}
                            displayEmpty
                            sx={{color:'#FF6701', fontWeight:'bold', width:'100px' }}
                            >
                              <MenuItem value="" disabled>نوع</MenuItem>
                            <MenuItem value='movie'>فیلم</MenuItem>
                            <MenuItem value='tv'>سریال</MenuItem>
                            <MenuItem value='person'>شخص</MenuItem>
                          </Select>
                      </FormControl>
                      <InputSearch SearchType={SearchType} handleSearch= {handleSearch} searchBox={searchBox} />
                    </Stack>
              </>) : null
          }
        </Box>
          <Box className='navbar__site' backgroundColor={transparent ? '#fff' : `background-image: url(./assets/bgImage1.jpg);`}>        
            <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center',height:'100px'}}>              
              <Stack spacing={4} direction='row' sx={{mr:10}}>                       
                <FormGroup>
                  <FormControlLabel control={<MaterialUISwitch onClick={transChange} sx={{ m: 2 }} defaultChecked />}/>
                </FormGroup>
                <IconButton href='/'>
                  <Typography variant='h6' component='div' color='#454545' >Drow Film</Typography>
                  <TheaterComedyIcon color='warning' />
                </IconButton>
              </Stack>
              <Stack direction='row' sx={{ml:10}}>
                <Button sx={{bgcolor:`transparent ? '#fff' :'#000'`,fontSize:'20px', borderRadius:10}} color='inherit'
                  startIcon={<Login sx={{pl:1.2, color:'#EF5B0C'}} />} onClick={handleLogin}>وارد شوید</Button>
                <Button sx={{bgcolor:`transparent ? '#fff' :'#000'`,fontSize:'20px', borderRadius:10,marginRight:5}}
                  color='inherit' startIcon={<PersonAddIcon sx={{pl:1.2, color:'#EF5B0C'}} />} onClick={handleSignUp}>ثبت نام</Button>
              </Stack>       
            </Box>       
              <AppBar position='static' color='transparent' height={100}>
                <Tooltip>
                  <Box sx={{display:"flex", justifyContent:'space-around',alignItems:'center',padding:'10px'}}>
                    <Stack direction='row'>
                    {
                      btn.map((items) => (
                        <Button href={items.link} color='inherit' sx={{fontSize:'20px'}}  size='large' key={items.name}
                        startIcon={items.icon}>{items.name}</Button>
                      ))
                    }
                    </Stack> 
                    <Stack direction='row'>
                      <FormControl 
                      sx={{ m: 1, minWidth: 90, backgroundColor:'#fff', borderRadius:'5px'}} size='small' color='warning'>
                          <Select
                            variant='outlined'
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={type}
                            onChange={typeHandler}
                            displayEmpty
                            sx={{color:'#FF6701', fontWeight:'bold' }}
                            >
                              <MenuItem value="" disabled>نوع</MenuItem>
                            <MenuItem value='movie'>فیلم</MenuItem>
                            <MenuItem value='tv'>سریال</MenuItem>
                            <MenuItem value='person'>شخص</MenuItem>
                          </Select>
                      </FormControl>
                      <InputSearch SearchType={SearchType} handleSearch= {handleSearch} searchBox={searchBox} />
                    </Stack>
                  </Box>
                </Tooltip>
              </AppBar>     
          </Box>
          {
            open ? <>
              <Box sx={{bgcolor:`transparent ? '#fff' :'#000'`, width:'100%', boxShadow:'0px 2px 5px #FF6701'}}
                role="presentation"
              >
                <List>
                  <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',p:'15px'}}>
                    <IconButton color='inherit' onClick={handleMenu}><CloseIcon />  </IconButton>      
                    <FormControlLabel control={<MaterialUISwitch onClick={transChange} defaultChecked />}/>               
                  </Box>
                  {btn.map((item,i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemButton href={item.link}>
                        <ListItemIcon>
                          {
                            item.icon
                          }
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                  <Divider color='#000' />
                  <List>
                    {['وارد شوید', 'ثبت نام'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton href={text==='وارد شوید' ? '/login' : '/sign-up'}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <Login color='warning' /> : <PersonAddIcon color='warning' />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
              </Box>
            </> : null
          }
      </>
    );
};

export default Navbar;

export const btn = [
  {name:'خانه' , icon: <HomeIcon color='warning' sx={{paddingLeft:1.5}} />, link:'/'},
  {name:'فیلم ها' , icon: <FilmIcon color='warning' sx={{paddingLeft:1.5}}  />, link:'/movie'},  
  {name:'سریال ها' , icon: <SerialIcon color='warning' sx={{paddingLeft:1.5}}  />, link:'/tv'},
  {name:'هنرمندان' , icon: <ArtistIcon color='warning' sx={{paddingLeft:1.5}}  />, link:'/person'},
  {name:'علاقه مندی ها' , icon: <FavoriteIcon color='warning' sx={{paddingLeft:1.5}}  />, link:'/favorites'},
  {name:'تماس با ما' , icon: <ContactIcon color='warning' sx={{paddingLeft:1.5}}  />, link:'/contact-us'},
]