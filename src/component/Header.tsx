import React from 'react'

const Header = () => {
  return (
   <>
    <div className="header">
          <div className="logo">
            <p>HomePage</p>
          </div>
          <div className="nav">
            <ul>
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <div className="dropdown">
                <li className="dropbtn">Menu</li>
                <div className="dropdown-content">
                  <div className="menu">
                    <ul>
                      <li>
                        <p>Menu 1</p>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                      </li>
                      <li>
                        <p>Menu 2</p>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                      </li>
                      <li>
                        <p>Menu 3</p>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                      </li>
                      <li>
                        <p>Menu 4</p>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                        <a>Áo khoác nam</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <li>Tin tức</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        </div>
   </>
  )
}

export default Header