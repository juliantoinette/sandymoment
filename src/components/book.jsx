import React from "react";
import NavBar from "./NavBars";
import { TextField,FormControl, InputLabel, Select, MenuItem, Checkbox } from '@mui/material';
import book from '../img/book_image_2.jpg'

  
const Book = () => {
  return (
    <>
    <NavBar/>
    <div  className="book">
    <img src={book} className="bookimg1" alt=""/>  
    <div className="bookForm">
    <br />

      <TextField className="formLabel3" id="outlined-basic" label="Name" size= "medium" variant="outlined"  />
      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      <center className="formSpacing">
      <TextField className="formLabel3" id="outlined-basic" label="Contact" variant="outlined" /> 
      </center>


    <center className="formSpacing">
    <FormControl className="formLabel1">
    <InputLabel id="demo-simple-select-label">Type of Photography</InputLabel>
    <Select
    id="demo-simple-select"
    label="Age"
    >
    <MenuItem value={10}>Kids</MenuItem>
    <MenuItem value={20}>Todler</MenuItem>
    <MenuItem value={30}>Maturnity</MenuItem>
    <MenuItem value={40}>Fashion</MenuItem>
    </Select>
    </FormControl>
    </center>
    <div className="">
    <h3>Types of Services</h3>
    <Checkbox {..."test"} /> Traditional Photography
    <br />
    <Checkbox {..."test"}  />Traditional Videography
    <br />
    <Checkbox {..."test"}  />Candid Photography
    <br />
    <Checkbox {..."test"}  />Candid Videography
    <br />
    <Checkbox {..."test"}  /> Pre-Shoot
    <br />
    <Checkbox {..."test"}  /> Post-Shoot
    <br />
    <Checkbox {..."test"}  /> Post-Shoot
    <br />
    <Checkbox {..."test"}  /> Indoor Shoot
    <br />
    <Checkbox {..."test"}  /> Outdoor Shoot
    
    </div>
    
   <center>
   <center className="formSpacing">
      <TextField className="formLabel3" id="outlined-basic" label="Venue" size= "medium" variant="outlined"  />
      </center>
      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      <center className="formSpacing">
      <TextField className="formLabel3" id="outlined-basic" label="Date" variant="outlined" />
    </center>
   </center>

   <center className="formSpacing">
    <FormControl className="formLabel1">
    <InputLabel id="demo-simple-select-label">Types of Package</InputLabel>
    <Select
    id="demo-simple-select"
    label="Packages"
    >
    <MenuItem value={10}>Budget</MenuItem>
    <MenuItem value={20}>Premium</MenuItem>
    <MenuItem value={30}>Elite</MenuItem>
    </Select>
    </FormControl>
    </center>

    <center className="formSpacing">
    <TextField className="formLabel3" id="outlined-basic" label="Requirement Details" variant="outlined" multiline rows ={4}/>
    </center>
    <center className="formSpacing">
    <TextField className="formLabel3" id="outlined-basic" label="How did you know us?" variant="outlined" multiline />
    </center>
    <center className="formSpacing">
    <button className="formButton">SUBMIT</button>
    </center>
    </div>
    </div>
    </>
  );
};
  
export default Book;