import React from 'react';

export const SideBar = ({sideBarOpen}) => {
    return (
        <div class="catagories-side-menu">
            <div onClick={()=>sideBarOpen()} id="sideMenuClose">
                <i class="ti-close"></i>
            </div>
            <div class="nav-side-menu">
                <div class="menu-list">
                    <h6>Sign Up</h6>
                    <ul id="menu-content" class="menu-content collapse out">
                        <form className="sign_up_form">
                            <input type="text" id="number" placeholder="+374" />
                            <div id="recaptcha-container"></div>
                            <button type="button" onclick="phoneAuth();">SendCode</button>
                        </form>
                        <h1 className="verification">Enter verification code</h1>
                        <form className="sign_up_form">
                            <input type="text" id="verificationCode" placeholder="Enter verification code" />
                            <button type="button" onclick="codeverify();">Verify</button>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
    )
}
