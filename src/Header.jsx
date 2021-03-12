import React from "react";
import { fade,  withStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./Header.css";
import {Signin,UserName} from "./Signin";
import Basket from "./Basket";
const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },   
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class Header extends React.Component {
  state = {
    achorEl: false,
    MobileMoreAnchorEl: false,
  };
  
  handleProfileMenuOpen = (event) => {
    this.setState({
      achorEl: event.currentTarget,
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  };

  handleMenuClose = () => {
    this.setState({
      achorEl: null,
      mobileMoreAnchorEl: null,
    });
  };

  handleMobileMenuOpen = (event) => {
    this.setState({
      mobileMoreAnchorEl: event.currentTarget,
    });
  };

  render() {
    
    
    const { classes } = this.props;
    const isMenuOpen = Boolean(this.state.anchorEl);
    const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={<Basket/>} color="secondary">
                  <Link to="/checkout">
                <ShoppingBasketIcon/>
                </Link>
                </Badge>
              </IconButton>
          <p>Basket</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            
          </IconButton>
          
          <p >Your</p>
          <p>Prime</p>
          
        </MenuItem>
        <MenuItem>
          <IconButton  color="black">
            
            {/* <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge> */}
          </IconButton>
          <p>Return Orders</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            
          </IconButton>
          <p><UserName/></p>
          <p><Signin/></p>
          
        </MenuItem>
        
      </Menu>
    );

    return (
      <div className={classes.grow}>
        <AppBar position="fixed" >
          <Toolbar>
          {/* https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png */}
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/" >
            <img
          className="header__logo"
          src=
            "/images/white_logo.png"
          
          alt=""
        /></Link>

              {/* Material-UI */}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton  color="inherit">
              <div  className="header__option">
                  <UserName/>
                  <Signin/>
                  </div>
              </IconButton>
              <IconButton color="inherit">
              <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">Orders</span>
            </div>
              </IconButton>
              <IconButton color="inherit">
              <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>
              </IconButton>
              
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={<Basket/>} color="secondary">
                  <Link to="/checkout">
                <ShoppingBasketIcon/>
                </Link>
                </Badge>
              </IconButton>
            
              
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }
}


// const basket=()=> {
    
//     return (
//         <>
//           <Link to="/checkout">
//             <div className="header__optionBasket">
//               <ShoppingBasketIcon />
//               <span className="header__optionLineTwo header__basketCount">
//                 {basket?.length}
//               </span>
//             </div>
//           </Link>  
//         </>
//     )
// }

 


export default withStyles(styles)(Header);
