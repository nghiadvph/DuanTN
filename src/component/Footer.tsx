import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="footer-last">
          <div className="footer-last1">
            <h4>Giới thiệu</h4>
            <p>Về chúng tôi</p>
            <p>Sản phẩm</p>
            <p>Khuyến mại</p>
            <p>Cửa hàng</p>
          </div>
          <div className="footer-last2">
          <h4>Điều khoản</h4>
            <p>Điều khoản sử dụng</p>
            <p>Chính sách bảo mật thông tin</p>
           <p>Hướng dẫn xuất đơn GTGT</p>
          </div>
          <div className="footer-last3">
          <p><img src="https://file.hstatic.net/1000075078/file/phone_0a42df1c753c4fa0910108daa73fe2ef.png"/>Đặt hàng: 1800 6936</p>
          <p><img src="https://file.hstatic.net/1000075078/file/map-pin-2-line_575ccb91b6f94a308d1bd507d4ae72a7.png"/>Địa chỉ: <span>Cầu diễn,Hà Nội</span></p> 
          
          </div>
        </div>
        <div className="dangky container p-4 pb-0">
          <form action="">
            <div className="row">
              <div className="col-auto mb-4 mb-md-0">
                <p className="pt-2">
                  <strong>Đăng ký để nhận bản tin</strong>
                </p>
              </div>

              <div className="col-md-5 col-12 mb-4 mb-md-0">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example22"
                    className="form-control"
                  />
                  <label className="form-label">Email address</label>
                </div>
              </div>

              <div className="col-auto mb-4 mb-md-0">
                <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-primary mb-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
