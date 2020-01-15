import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 50,
    marginBottom: 10
  }
}

export default function Search(props) {
  if(props.success) {
    props.revert()
  }

  return (
    <Grid container style={styles.Paper}>
      <Grid item sm={3}>
        <LeftPane />
      </Grid>
      <Grid item sm={9}>
        <RightPane xprops={props.xprops} tailors={ props.tailors } resetSpecs={props.resetSpecs} specs={props.specs} showSpecs={props.showSpecs} />
      </Grid>
    </Grid>
  )
}
