import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from './TemporaryDrawer.style';

const styles = {
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
};

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {[
                        'Degree Programs',
                        'Admissions',
                        "We're Different",
                        'Campus Online',
                        'About',
                        'What are you looking for?'
                    ].map((text, index) => (
                        <>
                            <ListItem
                                button
                                key={text}
                                style={{ padding: '2.5rem' }}
                            >
                                <ListItemText primary={text} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <StyledMenu onClick={this.toggleDrawer('right', true)} />

                <Drawer
                    anchor="right"
                    open={this.state.right}
                    onClose={this.toggleDrawer('right', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
