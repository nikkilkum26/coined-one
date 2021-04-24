import React ,{useEffect,useState,useContext}from 'react'
import { UserContext } from '../App'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './dropdown.css'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(7),
    },
    formControl: {
        minWidth: 'auto',
    },
    borderBottom: "none",
    shadows: ["none"]
}));


export default function ControlledOpenSelect({sendOp}) {
    const { state, dispatch } = useContext(UserContext)
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        setAge(1);
        sendOp(1)
        dispatch({
            type:"DROPDOWN",
            payload:1
        })
    }, [])

    const handleChange = (event) => {
        setAge(event.target.value);
        sendOp(event.target.value)
        dispatch({
            type:"DROPDOWN",
            payload:event.target.value
        })
    };
console.log("state123",state)

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>

            <FormControl className={classes.formControl}>

                <Select disableUnderline={true}

                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >

                    <MenuItem value={1}><Button variant={age===1?"outlined":"none"} color="primary">
                        All
                    </Button></MenuItem>
                    <MenuItem value={2}><Button variant={age===2?"outlined":"none"}  color="primary">
                        Class-time only
                    </Button></MenuItem>
                    <MenuItem value={3}><Button variant={age===3?"outlined":"none"}  color="primary">
                        Study-time only
                    </Button></MenuItem>
                    <MenuItem value={4}><Button variant={age===4?"outlined":"none"} color="primary">
                        Free-time only
                    </Button></MenuItem>
                    
                </Select>
            </FormControl>
        </div>
    )
}