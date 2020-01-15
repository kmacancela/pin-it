import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  title: {
    position: 'absolute',
    top: 40,
  },
}))

const AutoplaySlider = withAutoplay(AwesomeSlider)
const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={4000}
  >
    <div data-src="/img/slider-1.jpeg" />
    <div data-src="/img/slider-2.jpeg" />
    <div data-src="/img/slider-3.jpeg" />
  </AutoplaySlider>
)



export default function Welcome(props) {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <BrowserRouter>
          { props.user === null ?
            <>
            <Button variant="contained" className={ classes.button } href="/signup">
              Sign Up
            </Button>
            <Button variant="contained" className={ classes.button } href="/login">
              Log In
            </Button>
            </>
          :
            <Button variant="contained" className={ classes.button } href="/" onClick={ props.logout }>
              Log Out
            </Button>
          }
        </BrowserRouter>

        { slider }
      </div>
    )
}
