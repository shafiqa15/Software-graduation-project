import React, { useState,useEffect } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/slider/slider.css'; // Your CSS file path here

const optionsData = [

    {
        iconClass: 'fa-utensils',
        main: 'Dining Sets',
        sub: 'Elegant tables and chairs for family meals',
backgroundImage:'https://scontent.fjrs26-1.fna.fbcdn.net/v/t39.30808-6/425645668_706155821632598_8728115842892822658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=hdtxelgggr8AX_Rwasf&_nc_ht=scontent.fjrs26-1.fna&oh=00_AfDc7HK0eTtCg1LiNClowXppwqKJH2TGwHYONAx1gMrpTQ&oe=65DA6AB5',
      },
      {
        iconClass: 'fa-eye',
        main: 'mirrors',
        sub: 'Elegant reflections for every space',
        backgroundImage: 'https://scontent.fjrs26-1.fna.fbcdn.net/v/t39.30808-6/416001138_689063730008474_1920494663602484279_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=vYkCKQq99bEAX_kWMel&_nc_ht=scontent.fjrs26-1.fna&oh=00_AfCeOQ6baFTcmtQFya8811dbh7-mFlLAYdXQnpdflsffqw&oe=65D936E6',
      },
    
      {
        iconClass: 'fa-cube',
        main: 'Tables',
        sub: 'Find the perfect centerpiece for your dining room or offic',
        backgroundImage: 'https://scontent.fjrs26-1.fna.fbcdn.net/v/t39.30808-6/412742094_680238884224292_553156169171486898_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=oDRRbwQVia8AX8WZJdf&_nc_ht=scontent.fjrs26-1.fna&oh=00_AfC5XmL3kGH0WacjuJGSChVXKPgDwrYI2ZLVkcvnsOIYgg&oe=65D97C0C',
      },
  {
    iconClass: 'fa-bed',
    main: 'Bedroom',
    sub: 'Comfortable and stylish beds',
    backgroundImage:'https://parisfurnitureeg.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-11-ccccat-14.41.05.jpg',
  },
  { iconClass: 'fa-couch',
  main: 'Living Room',
  sub: 'Luxurious and modern sofas',
  backgroundImage: 'https://scontent.fjrs26-1.fna.fbcdn.net/v/t39.30808-6/416026378_687982476783266_606215530998296958_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=RkOyt-itZVsAX8iF6S8&_nc_ht=scontent.fjrs26-1.fna&oh=00_AfCNLpNUKS40m3pt0GSLfqVvrulyxr8otNT5AFrqV3Fwvg&oe=65D9ADFA',
},
{
  iconClass: 'fa-tv',
  main: 'Electronics',
  sub: 'Latest in television technology',
  backgroundImage: 'https://m.media-amazon.com/images/I/61K2WB+c0WL._AC_UF1000,1000_QL80_.jpg',
},
{
  iconClass: 'fa-blender-phone',
  main: 'Appliances',
  sub: 'High-quality kitchen and home devices',
  backgroundImage: 'https://scontent.fjrs26-1.fna.fbcdn.net/v/t39.30808-6/421830115_699169865664527_7336878440810194385_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=L3gV3tObIf0AX_kytw_&_nc_oc=AQkZ0pVt6l1sQaIPBBJ0X-lbaE3q_DoCr_s_hlRDVBfFy_AQZOzuLKdUdD02u_0MgmI&_nc_ht=scontent.fjrs26-1.fna&oh=00_AfApp3246ivDMhazu367fCmYSyn4UXGqH5aPBvEGoKyIYg&oe=65DA5EDB',
},

  // ... add other options here
];

const Option = ({ active, iconClass, main, sub, backgroundImage, onClick }) => (
  <div
    className={`option ${active ? 'active' : ''}`}
    style={{ backgroundImage: `url(${backgroundImage})` }}
    onClick={onClick}
  >
    <div className="label">
      <div className="icon">
        <i className={`fas ${iconClass}`}></i>
      </div>
      <div className="info">
        <div className="main">{main}</div>
        <div className="sub">{sub}</div>
      </div>
    </div>
  </div>
);

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
  // Add the class on component mount
  document.body.classList.add('customBodyStyle0');

  return () => {
    document.body.classList.remove('customBodyStyle0');
  };
}, []);

  return (
    <div className="options">
      {optionsData.map((option, index) => (
        <Option
          key={index}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
          {...option}
        />
      ))}
    </div>
  );
};

export default Slider;
