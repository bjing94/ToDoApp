import React, { Component } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Checkbox,
  Switch,
  FormControlLabel,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.darkBlue,
    height: "100%",
    width: "100%",
  }
}));

function AddBar({textInput,handleChange,handleAdd}){
  const theme =useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return(
    <Box display="flex" padding={2} justifyContent="center">
            <ButtonGroup fullWidth orientation={matches?'vertical':'horizontal'}>
              <TextField
                fullWidth
                
                label="Type something"
                variant="filled"
                color="primary"
                value={textInput}
                onChange={handleChange}
                
              />
              <Button
                style={matches?{width:'auto'}:{ width: "8rem" }}
                variant="contained"
                color="primary"
                onClick={handleAdd}
              >
                Add
              </Button>
            </ButtonGroup>
          </Box>
  )
}

function ListItem({ name, completed, checkItem }) {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      padding={2}
      bgcolor="common.blue"
      boxShadow={6}
    >
      <Typography color="textPrimary">{name}</Typography>
      <Checkbox
        color="secondary"
        checked={completed}
        onClick={() => {
          checkItem(name, !completed);
        }}
      />
    </Box>
  );
}
const startItems = [
  { name: "Walk the dog", completed: false },
  { name: "Play Starcraft 2", completed: true },
];
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: startItems,
      textInput: "",
      showCompleted: false,
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCheck(name, newValue) {
    this.setState(({ items }) => {
      let newItems = [...items];
      const index = newItems.findIndex((item) => item.name === name);
      newItems[index].completed = newValue;
      return { items: newItems };
    });
  }
  handleAdd() {
    this.setState(({ items, textInput }) => {
      let newItems = [...items, { name: textInput, completed: false }];
      console.log(newItems);
      return { items: newItems, textInput: "" };
    });
  }
  handleChange(event) {
    this.setState({ textInput: event.target.value });
  }
  render() {

    const elements = this.state.items.map((item) => {
      if (this.state.showCompleted) {
        return (
          <Grid item xs={12} key={`ListItem${item.name}`}>
            <ListItem
              name={item.name}
              completed={item.completed}
              checkItem={this.handleCheck}
            />
          </Grid>
        );
      } else if (item.completed === false) {
        return (
          <Grid item xs={12} key={`ListItem${item.name}`}>
            <ListItem
              name={item.name}
              completed={item.completed}
              checkItem={this.handleCheck}
            />
          </Grid>
        );
      }
      return null;
    });
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddBar textInput={this.state.textInput}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}/>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={this.state.showCompleted}
                onClick={() => {
                  this.setState({ showCompleted: !this.state.showCompleted });
                }}
              />
            }
            label={<Typography color="textPrimary">Show completed</Typography>}
          />
        </Grid>
        {elements}
      </Grid>
    );
  }
}

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Box display="flex" padding={2} justifyContent="center">
                <Typography color="textPrimary" variant="h4">
                  TO DO APP
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ToDoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
