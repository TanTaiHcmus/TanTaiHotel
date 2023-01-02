import React, { PureComponent } from "react";
import "./index.scss";
import collapseIcon from "../../Images/bars-solid.svg";

class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowNavbar: false,
    };

    this.bannerNavbarRef = React.createRef();
  }

  handleToggleNavbar = () => {
    this.setState({
      isShowNavbar: !this.state.isShowNavbar,
    });
  };

  componentDidMount() {
    if (this.props.navbar) {
      window.addEventListener("click", this.handleOutsideClick);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    const { target } = event;
    if (!this.state.isShowNavbar || target.className === "collapse-icon")
      return;
    if (this.bannerNavbarRef && !this.bannerNavbarRef.contains(target)) {
      event.preventDefault();
      this.setState({
        isShowNavbar: false,
      });
    }
  };

  render() {
    const { navbar = [], className, activeIndex, onChange } = this.props;
    const { isShowNavbar } = this.state;

    return (
      <div className={`navbar-container ${className ? className : ""}`}>
        <span className="menu-text">MENU</span>
        <img
          src={collapseIcon}
          className="collapse-icon"
          onClick={this.handleToggleNavbar}
        />
        <div
          className={`navbar-content ${isShowNavbar ? "show" : ""}`}
          ref={(ref) => {
            this.bannerNavbarRef = ref;
          }}
        >
          {navbar.map((item) => (
            <a
              className={`nav-item ${activeIndex === item.id ? "active" : ""}`}
              onClick={() => {
                if (this.state.isShowNavbar) {
                  this.setState({ isShowNavbar: false });
                }
                onChange(item.id);
              }}
              href={item.href}
              key={item.id}
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Navbar;
