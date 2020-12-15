import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./Contexts/ThemeContext";
import { LanguageContext } from "./Contexts/LanguageContext";
import { withLanguageContext } from "./Contexts/LanguageContext";
const word = {
  english: {
    search: "Search",
    flag: "british",
  },
  french: {
    search: "chercher",
    flag: "french",
  },
  spanish: {
    search: "searche",
    flag: "spanish",
  },
};
class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    let { isDark, toggleTheme } = this.context;
    const { Language } = this.props.LanguageContext;
    const { search, flag } = word[Language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDark ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>{flag}</span>
            </IconButton>

            <Typography className={classes.title} variant="h6" color="inherit">
              {Language}
            </Typography>

            <Switch onChange={toggleTheme} />

            <div className={classes.grow} />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,

                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
function Navbar(props) {
  const { classes } = props;
  let { isDark, toggleTheme } = React.useContext(ThemeContext);
  const { Language } = React.useContext(LanguageContext);
  const { search, flag } = word[Language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDark ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            {Language}
          </Typography>

          <Switch onChange={toggleTheme} />

          <div className={classes.grow} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,

                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
// export default withLanguageContext(withStyles(styles)(Navbar));
export default withStyles(styles)(Navbar);
