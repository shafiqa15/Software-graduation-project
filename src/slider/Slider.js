import React, { useState,useEffect } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/slider/slider.css'; // Your CSS file path here

const optionsData = [

    {
        iconClass: 'fa-utensils',
        main: 'Dining Sets',
        sub: 'Elegant tables and chairs for family meals',
backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t1.6435-9/118488384_759261141564645_9211105016124555152_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=ZEzM62FVHcYAX92ceRp&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfD58cFdj38cyALca-nBfcLInO4kVu7V5ZwMjSBelN9T9A&oe=66040EE7',
      },
      {
        iconClass: 'fa-eye',
        main: 'mirrors',
        sub: 'Elegant reflections for every space',
        backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/421155666_697591609155686_2026242433103725274_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=HzJDhX4M3CMAX8-H9dd&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfDSPWWDj3CIwStFgm9zlD_9A32Zqo8eSB2_SSk8yMGU0Q&oe=65E0EE4F',
      },
    
      {
        iconClass: 'fa-cube',
        main: 'Tables',
        sub: 'Find the perfect centerpiece for your dining room or offic',
        backgroundImage: 'https://scontent.fjrs27-1.fna.fbcdn.net/v/t1.6435-9/107769389_718870505603709_6608763176993251286_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=eQolc_S0FoAAX9yu9y2&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfBznsQqru3LKG5R_yusbFRae9DPqKwVIvJEDQYnaRQB6g&oe=66041DE8',
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
  backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/424922107_711901527724694_9107286498942218375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ZFXD0YD0vjIAX-B30nE&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfBkYfRqorDzXFSzyxzQiE3HG1MDVWu6cAhIVv2sEO7kKg&oe=65E121A5',
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
  backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/422092725_711192021128978_2078010298482439679_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=z0fRKrxOq7QAX9_rIOj&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfClzZL64Nbkh4KgGRzf_7EapP2CZgbQUsmyDlNyTKgpeg&oe=65E135BB',
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
