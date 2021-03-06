import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ count, search }) => {
  return (
    <div className="py-2 px-3 sm:px-10 flex justify-between items-center bg-black bg-opacity-70 ">
      <Link to="/">
        <p className="text-darkBlue font-bold text-xl sm:text-2xl logo cursor-pointer">
          Blue!
        </p>
      </Link>
      <div className="w-1/2 sm:w-3/6 h-6 sm:h-7 relative">
        <input
          className="w-full h-full border px-2 focus:outline-none border-lightBlue rounded-md text-xs"
          type="text"
          placeholder="Search"
          onChange = {(e) => search(e)}
        />
        <svg
          className="absolute right-4 top-2"
          width="12"
          height="12"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1944 23.7582L20.8977 19.5573L20.797 19.4041C20.6097 19.2177 20.3537 19.1127 20.0865 19.1127C19.8192 19.1127 19.5632 19.2177 19.3759 19.4041C15.7244 22.7542 10.0977 22.9363 6.22751 19.8296C2.35733 16.723 1.44459 11.2917 4.09461 7.13771C6.74463 2.98372 12.1351 1.39606 16.6911 3.42767C21.247 5.45928 23.5548 10.4797 22.0838 15.1595C21.9778 15.4976 22.0644 15.8652 22.3109 16.124C22.5574 16.3827 22.9264 16.4932 23.2788 16.4139C23.6312 16.3345 23.9136 16.0774 24.0195 15.7393C25.778 10.1858 23.1222 4.20944 17.7701 1.67632C12.4181 -0.856798 5.97605 0.81353 2.61132 5.60677C-0.753412 10.4 -0.0310261 16.8777 4.31116 20.8494C8.65335 24.8211 15.3122 25.0949 19.9802 21.4936L23.7846 25.2131C24.1775 25.5956 24.8127 25.5956 25.2056 25.2131C25.5981 24.8253 25.5981 24.2007 25.2056 23.8129L25.1944 23.7582Z"
            fill="#1687A7"
          />
        </svg>
      </div>
      <Link to="/cart"><button className="relative">
        <svg
      
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4 3.2H32L27.2 17.6H6.4C5.97565 17.6 5.56869 17.7686 5.26863 18.0686C4.96857 18.3687 4.8 18.7757 4.8 19.2C4.8 19.6243 4.96857 20.0313 5.26863 20.3314C5.56869 20.6314 5.97565 20.8 6.4 20.8H27.2V24H6.4C5.12696 24 3.90606 23.4943 3.00589 22.5941C2.10571 21.6939 1.6 20.473 1.6 19.2C1.6 17.927 2.10571 16.7061 3.00589 15.8059C3.90606 14.9057 5.12696 14.4 6.4 14.4H6.928L4.8 8L3.2 3.2H0V0H4.8C5.22435 0 5.63131 0.168571 5.93137 0.468629C6.23143 0.768687 6.4 1.17565 6.4 1.6V3.2ZM8 32C7.15131 32 6.33737 31.6629 5.73726 31.0627C5.13714 30.4626 4.8 29.6487 4.8 28.8C4.8 27.9513 5.13714 27.1374 5.73726 26.5373C6.33737 25.9371 7.15131 25.6 8 25.6C8.84869 25.6 9.66263 25.9371 10.2627 26.5373C10.8629 27.1374 11.2 27.9513 11.2 28.8C11.2 29.6487 10.8629 30.4626 10.2627 31.0627C9.66263 31.6629 8.84869 32 8 32ZM24 32C23.1513 32 22.3374 31.6629 21.7373 31.0627C21.1371 30.4626 20.8 29.6487 20.8 28.8C20.8 27.9513 21.1371 27.1374 21.7373 26.5373C22.3374 25.9371 23.1513 25.6 24 25.6C24.8487 25.6 25.6626 25.9371 26.2627 26.5373C26.8629 27.1374 27.2 27.9513 27.2 28.8C27.2 29.6487 26.8629 30.4626 26.2627 31.0627C25.6626 31.6629 24.8487 32 24 32Z"
            fill="#1687A7"
          />
        </svg>
        <div className="w-4 h-4 flex items-center justify-center text-xs rounded-xl bg-red-400 absolute bottom-3 left-2 text-white">{count}</div>
      </button></Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.cartCount
  }
}

export default connect(mapStateToProps, null)(Navbar);
