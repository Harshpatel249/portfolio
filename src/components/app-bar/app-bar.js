import React from 'react';

import "../../styles/typography.css";
import "../../styles/color.css";
import "./app-bar.css";

import Button from '@mui/material/Button';

export default function Appbar() {
    return (
        <div className='app-bar'>
            <Button className='button body white-blue fw-400' variant="text">About</Button>
            <Button className='button body white-blue fw-400' variant="text">Work</Button>
            <Button className='button body white-blue fw-400' variant="text">Education</Button>
            <Button className='button body white-blue fw-400' variant="text">Projects</Button>
            <Button className='button body white-blue fw-400' variant="text">Get in touch</Button>
        </div>
    );
}