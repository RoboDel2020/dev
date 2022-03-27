import React from 'react'

export default function Home(){
    return (
        <React.Fragment>
            <p> Dashboard</p>
            <div className="main">

                <div className="card">


                    <div className="title">
                        <h1>Operator Panel</h1>
                        <h2>Control Robo</h2>
                    </div>
                    <div className="des">
                        <button><i className="fas fa-briefcase"></i></button>
                    </div>
                </div>

                <div className="card">


                    <div className="title">
                        <h1>Orders</h1>
                        <h2>Delivery details</h2>
                    </div>
                    <div className="des">
                        <button><i className="fas fa-truck"></i></button>
                    </div>
                </div>

                <div className="card">


                    <div className="title">
                        <h1>Repair & Support</h1>
                        <h2>Repair bot</h2>
                    </div>
                    <div className="des">
                        <button><i className="fas fa-cog"></i></button>
                    </div>
                </div>

                <div className="card">


                    <div className="title">
                        <h1>Map View</h1>
                        <h2>Google Maps</h2>

                    </div>
                    <div className="des">
                        <button><i className="fas fa-search-location"></i></button>
                    </div>
                </div>

                <div className="card">


                    <div className="title">
                        <h1>Message Admin</h1>
                        <h2>Chat Room</h2>
                    </div>
                    <div className="des">
                        <button><i className="fab fa-rocketchat"></i></button>
                    </div>
                </div>

                <div className="card">


                    <div className="title">
                        <h1>Settings</h1>
                        <h2>Control Panel</h2>
                    </div>
                    <div className="des">
                        <button><i className="fas fa-screwdriver"></i></button>
                    </div>
                </div>

                <div className="card">


                    <div className="title">
                        <h1>Assistance</h1>
                        <h2>Guide Me</h2>
                    </div>
                    <div className="des">
                        <button><i className="fas fa-headset"></i></button>
                    </div>
                </div>

            </div>





            <div className="wrapper">
                <div className="header">
                    <div className="header-menu">
                        <div className="title">Robo <span>del</span></div>
                        <div className="sidebar-btn">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="topnav">
                            <a href="#Operator Panel">Operator Panel</a>
                            <a href="allbots.html">All Bots</a>
                            <a href="#Online">Online</a>
                            <a href="#Need Assistance">Need Assistance</a>
                        </div>
                        <ul>
                            <li><a href="#"><i className="fas fa-search"></i></a></li>
                            <li><a href="#"><i className="fas fa-bell"></i></a></li>
                        </ul>


                    </div>

                </div>

                <div className="sidebar">
                    <div className="sidebar-menu">
                        <center className="profile">
                            <img src="1.jpg" alt=""/>
                                <p>Admin</p>
                            </center>
                        <li className="item">
                            <a href="#" className="menu-btn">
                                <i className="fas fa-desktop"></i><span>Dashboard</span>
                            </a>
                        </li>
                    </div>
                    <li className="item" id="Operator panel">
                        <a href="#Operator panel" className="menu-btn">
                            <i className="fas fa-briefcase"></i><span>Operator Panel</span>
                        </a>

                    </li>
                    <li className="item" id="Orders">
                        <a href="#Orders" className="menu-btn">
                            <i className="fas fa-truck"></i><span>Orders </span>
                        </a>
                    </li>
                    <li className="item" id="Repair & Support">
                        <a href="#Repair & Support" className="menu-btn">
                            <i className="fas fa-cog"></i><span>Repair & Support </span>
                        </a>
                    </li>
                    <li className="item" id="Map view">
                        <a href="#Map view" className="menu-btn">
                            <i className="fas fa-search-location"></i><span>Map view </span>
                        </a>
                    </li>
                    <li className="item" id="Message Admin">
                        <a href="#Message Admin" className="menu-btn">
                            <i className="fab fa-rocketchat"></i><span>Message Admin </span>
                        </a>
                    </li>
                    <li className="item" id="Assistance">
                        <a href="#Assistance" className="menu-btn">
                            <i className="fas fa-headset"></i><span>Assistance </span>
                        </a>
                    </li>
                    <li className="item" id="Profile">
                        <a href="#profile" className="menu-btn">
                            <i className="fas fa-user-circle"></i><span>Profile </span>
                        </a>
                    </li>
                    <li className="item" id="Robo Details">
                        <a href="#Robo Details" className="menu-btn">
                            <i className="fas fa-robot"></i><span>Robo details </span>
                        </a>
                    </li>
                </div>
            </div>

            <div className="main-container">

            </div>

        <script type="text/javascript">
                (document).ready(function(){(".sidebar-btn").click(function () {
                    (".wrapper").toggleclassName("collapse");
                })};
                });
            </script>

        </React.Fragment>
    )
}