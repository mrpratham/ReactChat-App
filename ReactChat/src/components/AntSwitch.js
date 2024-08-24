// import { Switch } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const AntSwitch = styled(Switch)(({ theme }) => ({
//   width: 40,
//   height: 20,
//   padding: 0,
//   display: 'flex',
//   '&:active': {
//     '& .MuiSwitch-thumb': {
//       width: 15,
//     },
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       transform: 'translateX(9px)',
//     },
//   },
//   '& .MuiSwitch-switchBase': {
//     padding: 2,
//     '&.Mui-checked': {
//       transform: 'translateX(20px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     transition: theme.transitions.create(['width'], {
//       duration: 200,
//     }),
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 20 / 2,
//     opacity: 1,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
//     boxSizing: 'border-box',
//   },
// }));

// export default AntSwitch;

import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 60,  // Adjusted width to accommodate icons
  height: 30, // Adjusted height to accommodate icons
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(30px)',  // Adjusted to align with thumb movement
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(30px)',  // Adjusted to align with thumb movement
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 24,  // Adjusted to be larger for better visual
    height: 24,
    borderRadius: 12,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 30 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    position: 'relative',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 20,
      height: 20,
    },
    '&:before': {
      left: 5,
      top: 12,
      content: '"☀️"', // You can replace this with the SunIcon
    },
    '&:after': {
      right: 5,
      top: 12,
      content: '"🌙"', // You can replace this with the MoonIcon
    },
  },
}));

export default AntSwitch;
