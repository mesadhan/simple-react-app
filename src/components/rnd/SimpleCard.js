import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const {classes} = props;


    return (
        <Card className={classes.card}>
            <CardContent>
                <h1>dfsdafasdfsafdasfdsdfsdfdfgdg</h1>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
