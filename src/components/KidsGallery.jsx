
import React from "react";
import NavBar from "./NavBars";
import "../App.css";
import Kids_1 from '../img/1.jpg'
import Kids_2 from '../img/2.jpg'
import Kids_3 from '../img/3.jpg'
import Kids_4 from '../img/4.jpg'
import Kids_5 from '../img/5.jpg'
import Kids_6 from '../img/6.jpg'
import Kids_7 from '../img/7.jpg'
import Kids_8 from '../img/8.jpg'
import Kids_9 from '../img/9.jpg'
import Kids_10 from '../img/10.jpg'
import Kids_11 from '../img/11.jpg'
import Kids_12 from '../img/12.jpg'
import Kids_13 from '../img/13.jpg'
import Kids_14 from '../img/14.jpg'
import Kids_15 from '../img/15.jpg'
import Kids_16 from '../img/16.jpg'
import Kids_17 from '../img/17.jpg'
import Kids_18 from '../img/18.jpg'
import Kids_19 from '../img/19.jpg'
import Kids_20 from '../img/20.jpg'
import Kids_21 from '../img/21.jpg'
import Kids_22 from '../img/22.jpg'
import Kids_23 from '../img/23.jpg'
import Kids_24 from '../img/24.jpg'
import Kids_25 from '../img/25.jpg'
import Kids_26 from '../img/26.jpg'
import Kids_27 from '../img/27.jpg'
import Kids_28 from '../img/28.jpg'
import Kids_29 from '../img/29.jpg'
import Kids_30 from '../img/30.jpg'
import Kids_31 from '../img/31.jpg'
import Kids_32 from '../img/32.jpg'
import Kids_33 from '../img/33.jpg'
import Kids_34 from '../img/34.jpg'
import Kids_35 from '../img/35.jpg'
import Kids_36 from '../img/36.jpg'
import Kids_37 from '../img/37.jpg'
import Kids_38 from '../img/38.jpg'
import Kids_39 from '../img/39.jpg'
import Kids_40 from '../img/40.jpg'
import Kids_41 from '../img/41.jpg'
import Kids_42 from '../img/42.jpg'
import Kids_43 from '../img/43.jpg'
import Kids_44 from '../img/44.jpg'
import Kids_45 from '../img/45.jpg'
import Kids_46 from '../img/46.jpg'
import Kids_47 from '../img/47.jpg'
import Kids_48 from '../img/48.jpg'
import Kids_49 from '../img/49.jpg'
import Kids_50 from '../img/50.jpg'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
  
const KidsGallery = () => {
  return (
    <>
    <NavBar/>
    <StandardImageList/>
    </>
  );
};

 function StandardImageList() {
  return (
    <ImageList sx={{ width: '100%', height: '100%', marginTop: '0%' }} cols={2} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Kids_1
  },
  {
    img: Kids_2
  },
  {
    img: Kids_3
  },
  {
    img: Kids_4
  },
  {
    img: Kids_5
  },
  {
    img: Kids_6
  },
  {
    img: Kids_7
  },
  {
    img: Kids_8
  },
  {
    img: Kids_9
  },
  {
    img: Kids_10
  }, 
  {
    img: Kids_11
  },
  {
    img: Kids_12
  },
  {
    img: Kids_13
  },
  {
    img: Kids_14
  },
  {
    img: Kids_15
  },
  {
    img: Kids_16
  },
  {
    img: Kids_17
  },
  {
    img: Kids_18
  },
  {
    img: Kids_19
  },
  {
    img: Kids_20
  }, 
  {
    img: Kids_21
  },
  {
    img: Kids_22
  },
  {
    img: Kids_23
  },
  {
    img: Kids_24
  },
  {
    img: Kids_25
  },
  {
    img: Kids_26
  },
  {
    img: Kids_27
  },
  {
    img: Kids_28
  },
  {
    img: Kids_29
  },
  {
    img: Kids_30
  },
  {
    img: Kids_31
  },
  {
    img: Kids_32
  },
  {
    img: Kids_33
  },
  {
    img: Kids_34
  },
  {
    img: Kids_35
  },
  {
    img: Kids_36
  },
  {
    img: Kids_37
  },
  {
    img: Kids_38
  },
  {
    img: Kids_39
  },
  {
    img: Kids_40
  }, 
  {
    img: Kids_41
  },
  {
    img: Kids_42
  },
  {
    img: Kids_43
  },
  {
    img: Kids_44
  },
  {
    img: Kids_45
  },
  {
    img: Kids_46
  },
  {
    img: Kids_47
  },
  {
    img: Kids_48
  },
  {
    img: Kids_49
  },
  {
    img: Kids_50
  }, 
];

  
export default KidsGallery;