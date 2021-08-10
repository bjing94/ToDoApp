import { createTheme } from "@material-ui/core";

const white='#f5f4f2';
const blue = '#79aab2';
const darkBlue='#2d3f4c';
const darkBlue2='#284c66'
const black='#000';

const  theme = createTheme({
    palette:{
        common:{
            white:`${white}`,
            darkBlue:`${darkBlue}`,
            blue:`${blue}`,
            black:`${black}`
        },
        type:'light',
        primary:{
            main:`${blue}`,
            contrastText:`${white}`
        },
        secondary:{
            main:`${white}`,
            contrastText:`${white}`
        },
        text:{
            primary:`${white}`,
            secondary:`${darkBlue2}`
        },

    },
    
    typography:{
        fontFamily:`'Oswald', sans-serif`,
        fontSize:20,
        fontWeightLight:300,
        fontWeightRegular:400,
        fontWeightBold:600
    }
})
export default theme;