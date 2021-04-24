import React ,{useEffect,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card'
import ProgressBar from './ProgressBar'
import ByDevices from './ByDevices'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 433,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid({dropDownData,data}) {
  const [spacing, setSpacing] = useState(1);
  const [styles,setStyles]=useState({
    height: 260,
    width: 420
  })
  const classes = useStyles();
console.log(dropDownData)
  return (
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
       
            <Grid  item >
                <Card dropDown={dropDownData} data={data} style={styles}/>
            </Grid>
            <Grid  item>
           <ProgressBar  style={styles}/>
            
            </Grid>
            <Grid  item>
               <ByDevices  style={styles}/>
            </Grid>
          {/* ))} */}
        </Grid>
      </Grid>
    </Grid>
  );
}