import React from 'react'
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";


let styles = ({
    card: {
        minWidth: 275,
    }
});

const person = (props) => {
    const {classes} = props;

    return (
        <div className="">

            <Card className={classes.card}>
                <CardContent>
                    <p style={styles}>I am <span style={{color: 'green'}}>{props.name}</span> and I am <span
                        style={{color: 'green'}}>{props.age} </span>years old!</p>
                    <div>{props.children}</div>


                    <TextField
                        id="outlined-with-placeholder"
                        label="Enter Person Name"
                        placeholder="Placeholder"
                        variant="outlined"
                        onChange={props.changed} defaultValue={props.name}
                    />


                </CardContent>
                <CardActions>
                    <Button style={{float: 'right'}} variant="contained" color="secondary" size="small" onClick={props.click}>Delete Person</Button>
                </CardActions>
            </Card>

        </div>
    )
};

person.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(person);
