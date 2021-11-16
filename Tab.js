import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="flex flex-col space-y-5 max-w-md mx-auto my-16 min-w-500">
      <div className="flex items-center justify-between">
        {/* <h2 className="text-4xl font-semibold text-blue-800">Login</h2> */}
      </div>
      <TextField
        // value={username}
        required
        id="outlined-required"
        label="Username"
        onChange={(e) => this.handleUsernameChange(e)}
      />
       <TextField
        // value={username}
        required
        id="outlined-required"
        label="Email Id"
        onChange={(e) => this.handleUsernameChange(e)}
      />
      <Button variant="contained" onClick={this.handleLogin}>
        Start Quiz
      </Button>
      {/* {shouldAlertDisplay && (
        <Alert severity="error">Field cannot be empty</Alert>
      )}
      {shouldLoginErrorDisplay && (
        <Alert severity="error">Invalid username or password</Alert>
      )} */}
    </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);