import { Box, makeStyles } from '@material-ui/core'
import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner.jsx';
import Slide from './Slide.jsx';
import products from '../../constants/product';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rightWrapper: {

    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                
                <Slide
                    data={products} 
                    
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home;