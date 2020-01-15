import React from 'react'
import { Paper } from '@material-ui/core'
import Header from './Header'
import Tailor from './Tailor'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default function RightPane(props) {

  const fetchTailors = () => {
    console.log("inside right pane", props.tailors)

  }

  return(
    <Paper>
      {props.tailors.map(tailor => {
        return <Tailor xprops={props.xprops} tailor={ tailor } resetSpecs={props.resetSpecs} specs={props.specs} showSpecs={props.showSpecs} />
      })}
    </Paper>
  )
}
