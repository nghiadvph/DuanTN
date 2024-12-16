import React, { useEffect, useState } from "react";

const HomePage = () => {
    interface ImageData{
        src: string;
        alt:string
    }
    const images : ImageData[] =[
        {src:'https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dang-cap-hien-dai_113856116.png',alt:""},
        {src:'https://th.bing.com/th/id/OIP.H-xGwrxG1Orap8eOsn5prwHaDn?w=302&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7',alt:""},
        {src:'https://th.bing.com/th/id/OIP.1u_ZqHnHNT_95amGgAgsEAHaC9?w=301&h=140&c=7&r=0&o=5&dpr=1.3&pid=1.7',alt:""}
    ] 
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    useEffect(()=>{
        const intervalId = setInterval(() => { 
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
          }, 5000);
    },[])
  return (
    <>
      <div className="block">
        <div className="banner">
          <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt}/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
