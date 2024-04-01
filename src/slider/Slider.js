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
        backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/421155666_697591609155686_2026242433103725274_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cqsAerdE4RYAX91RLSh&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfCVceqHzLPeb38rZiGH_H8EYWyJBA0x_kSA4KxcEvr4Vw&oe=6606810F',
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
    backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/419198067_693453482902832_1114294966367502952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j6cuGNT7O1IAX8WEr99&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfB7VwgfpW-kQpOkAuSitt-d5pWJcwqqI36v9RR6XtyJUA&oe=6606A36C',
  },
  { iconClass: 'fa-couch',
  main: 'Living Room',
  sub: 'Luxurious and modern sofas',
  backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/419708516_694005959514251_5297615818236237879_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_VzsvbkHMMcAX9TJMOZ&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfD4lAs-n9KMElG42a-5cdVp-WbF1J8clJe7Qcu9NvcamA&oe=66080921',


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
  backgroundImage:'https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/433130330_732466939001486_3939752521216473422_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c-1atjhu1B0AX9tkx-I&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfB_Xr7ZfyuQfnndl-7BkVh_GF5k77vdmwFa5MVLDAVt6w&oe=6607F9D0',
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
