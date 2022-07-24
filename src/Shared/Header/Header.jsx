import logo from '../../assets/img/logo.svg'
import './Header.scss'
import { TextField } from "@mui/material";
import CustomizedSwitches from '../../components/CustomizedSwitches/CustomizedSwitches';




export  function Header({themeToggle, onChange, label,check}) {



  return (
    <div className='header'>
        <div className="header__body">
            <img className='header__logo' src={logo} alt="logo" />
            <h1 className='header__title'>React weather</h1>
        </div>
        <div className="header__body">
        <CustomizedSwitches  onClick={themeToggle} check={check}/>
        <TextField  onChange={onChange}   id="outlined-basic" label={label} variant="outlined" />
        </div>
    </div>
  )
}

