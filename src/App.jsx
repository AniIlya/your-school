
import { Button, TextField } from "@mui/material";
import "./App.css"
import logo from "./assets/logo.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import icn1 from "./assets/icn1.png"
import icn2 from "./assets/icn2.png"
import icn3 from "./assets/icn3.png"
import avatar2 from "./assets/avatar2.png"
import pencil1 from "./assets/pencil1.png"
import pencil2 from "./assets/pencil2.png"
import pencil3 from "./assets/pencil3.png"
import star from "./assets/star.png"
import sales from "./assets/sales.png"
import stars from "./assets/stars.png"
import user1 from "./assets/user1.png"
import user2 from "./assets/user2.png"
import user3 from "./assets/user3.png"
import teach1 from "./assets/teach1.png"
import teach2 from "./assets/teach2.png"
import teach3 from "./assets/teach3.png"
import teach4 from "./assets/teach4.png"
import insta from "./assets/insta.png"
import avatar1 from "./assets/avatar.png"
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  return (
    <div>
     <header className="grid lg:grid-cols-[20%,60%,20%]  grid-cols-[20%,20%,60%] w-[90%] lg:w-[80%] m-auto">
       <img className=" md:place-self-center place-self-center" src={logo} alt="" />
      <nav className="lg:self-center  md:py-3 justify-self-end">
<ul className="lg:flex gap-5 hidden">
  <li className="text-[#737373]">Home</li>
  <li className="text-[#737373]">Product</li>
  <li className="text-[#737373]">Pricing</li>
  <li className="text-[#737373]">Contact</li>
</ul>
<div className="lg:hidden ">
<MenuIcon/> 
</div>
      </nav>
      <div className="flex items-center justify-self-end">
        <div className=""> <Button variant="text" color='success' size="midle">Login</Button></div>
       <div className=""><Button variant="contained" color='success' size="midle" endIcon={<ArrowRightAltIcon/>}>JOIN US</Button></div>
      </div>
     </header>

     <section className="">
      <div className="lg:flex">
      {/* <div className="lg:hidden m-auto">
        <img src={avatar1} alt="" />
      </div> */}
<div className="lg:w-[40%] pl-[10%] pt-[12%] pb-[5%] md:w-[70%]">
  <p className="text-[#96BB7C] text-sm font-semibold">Join Us</p>
  <h1 className="text-[#252B42] font-bold text-4xl py-8">25K+ STUDENTS TRUST US</h1>
  <p className="text-xl text-[#737373]">Every day brings with it a fresh set of learning possibilities.</p>
  
  <div className="flex items-center  w-full py-8"> 
   <div className=""><Button variant="contained" color='success' size="midle" >Get Quote Now</Button></div>
        <div className=""> <Button variant="outlined" color='success' size="midle">Learn More</Button></div>
     
      </div>
  </div>
  <div className="m-auto">
    <img src={avatar1} alt="" />
  </div>
</div>
  <div className=" grid lg:grid-cols-3 md:grid-cols-2 w-[80%] m-auto lg:gap-[7%] gap-4">
    <div className="p-8 bg-white rounded-xl">
      <img src={icn1} alt="" />
      <p className="text-[#252B42] font-medium">Expert instruction</p>
      <div className="py-[2px] bg-[#E74040] w-11 rounded-lg my-3"></div>
      <p className="text-sm text-[#737373]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>

    </div>
    <div className="p-8 bg-white rounded-xl">
      <img src={icn2} alt="" />
      <p className="text-[#252B42] font-medium">Training Courses</p>
      <div className="py-[2px] bg-[#E74040] w-11 rounded-lg my-3"></div>
      <p className="text-sm text-[#737373]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>

    </div>
    <div className="p-8 bg-white rounded-xl">
      <img src={icn3} alt="" />
      <p className="text-[#252B42] font-medium">Expert instruction</p>
      <div className="py-[2px] bg-[#E74040] w-11 rounded-lg my-3"></div>
      <p className="text-sm text-[#737373]">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>

    </div>
  </div>
     </section>
     <section className="md:flex flex-wrap md:justify-between w-[80%] m-auto py-[7%] ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#96BB7C]">15K</h1>
        <p className="text-[#252B42] font-medium text-sm">Happy Customers</p>
        </div>
        <div className="text-center">
        <h1 className="text-4xl font-bold text-[#96BB7C]">150K</h1>
        <p className="text-[#252B42] font-medium text-sm">Monthly Visitors</p>
        </div>
        <div className="text-center">
        <h1 className="text-4xl font-bold text-[#96BB7C]">15</h1>
        <p className="text-[#252B42] font-medium text-sm">Countries  Worldwide</p>
        </div>
        <div className="text-center">
        <h1 className="text-4xl font-bold text-[#96BB7C]">100+</h1>
        <p className="text-[#252B42] font-medium text-sm">Top Partners</p>
        </div>
     </section>
<section>
  <div className="grid md:grid-cols-2 w-[80%] m-auto py-[2%]">
    <div className="self-center">
      <div className="py-[2px] bg-[#E74040] w-[20%] rounded-lg my-3"></div>
      <p className="text-[#252B42] font-medium py-5 w-[80%] text-4xl">Every Client Matters</p>
      <p className="text-sm text-[#737373]">Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics </p>
<div className="py-6"><Button variant="text" color='success' size="midle" endIcon={<ArrowRightAltIcon/>}>Learn More</Button></div>
    </div>
  <div className="">
    <img src={avatar2} alt="" />
  </div></div>
</section>
<section className="py-[5%] bg-[#FFF2F3] px-[10%]">
<p className="text-[#96BB7C] text-sm font-semibold">Practice Advice</p>
<p className="text-[#252B42] font-medium py-3 w-[80%] text-4xl">Our Experts Teacher</p>
<p className="text-sm text-[#737373] lg:w-[50%] md:w-[80%]">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
  <div className=" grid lg:grid-cols-3 md:grid-cols-2  gap-2 py-9 ">
    <div className=" bg-white">
<img className="w-full" src={pencil1} alt="" />
<div className="p-4">
  <div className="flex justify-between">
  <p className="text-[#96BB7C] text-sm font-semibold">Training Courses</p>
  <img  src={star} alt="" />

  </div>
  <p className="text-[#252B42] font-medium py-3">Get Quality Education</p>
  <p className="w-[90%] text-sm text-[#737373]">We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<img src={sales} alt="" className="py-3" />
<p className="pb-3"><span className="text-lg font-normal text-[#BDBDBD]">$16.48</span>  <span className="text-lg font-normal text-[#FFAB71]">$6.48</span></p>
<Button variant="outlined" color='success' size="midle">Learn More</Button>
</div>
    </div>

    <div className=" bg-white">
<img className="w-full" src={pencil2} alt="" />
<div className="p-4">
  <div className="flex justify-between">
  <p className="text-[#96BB7C] text-sm font-semibold">Training Courses</p>
  <img src={star} alt="" />

  </div>
  <p className="text-[#252B42] font-medium py-3">Get Quality Education</p>
  <p className="w-[90%] text-sm text-[#737373]">We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<img src={sales} alt="" className="py-3" />
<p className="pb-3"><span className="text-lg font-normal text-[#BDBDBD]">$16.48</span>  <span className="text-lg font-normal text-[#FFAB71]">$6.48</span></p>
<Button variant="outlined" color='success' size="midle">Learn More</Button>
</div>
    </div>

    <div className=" bg-white">
<img className="w-full" src={pencil3} alt="" />
<div className="p-4">
  <div className="flex justify-between">
  <p className="text-[#96BB7C] text-sm font-semibold">Training Courses</p>
  <img src={star} alt="" />

  </div>
  <p className="text-[#252B42] font-medium py-3">Get Quality Education</p>
  <p className="w-[90%] text-sm text-[#737373]">We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<img src={sales} alt="" className="py-3" />
<p className="pb-3"><span className="text-lg font-normal text-[#BDBDBD]">$16.48</span>  <span className="text-lg font-normal text-[#FFAB71]">$6.48</span></p>
<Button variant="outlined" color='success' size="midle">Learn More</Button>
</div>
    </div>
  </div>
</section>

<section className="w-[80%] m-auto py-[5%]">
  <div className="">
  <p className="text-[#96BB7C] text-sm font-semibold">Practice Advice</p>
<p className="text-[#252B42] font-medium py-3 w-[80%] text-4xl">Every Client Matters</p>
<p className="text-sm text-[#737373] lg:w-[50%] md:w-[80%]">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics  </p>
  </div>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[15%] gap-[2%]">
    <div className="p-4 text-center py-10">
<img className="m-auto" src={stars} alt="" />
<p className="text-sm text-[#737373] py-4 ">Slate helps you see 
how many more days 
you need to work to 
reach your financial 
goal for the month 
and year.  </p>
<div className="flex gap-[15%] m-auto justify-self-center">
  <div className="self-center">
     <img src={user1} alt="" />
     </div>
 
  <div className="text-start py-4">
  <p className="text-[#96BB7C] text-sm font-semibold">Regina Miles</p>
  <p className="text-[#252b42] text-xs font-semibold">Designer</p>
  </div>
</div>
</div>

    <div className="p-4  text-center py-10">
<img className="m-auto" src={stars} alt="" />
<p className="text-sm text-[#737373] py-4 ">Slate helps you see 
how many more days 
you need to work to 
reach your financial 
goal for the month 
and year.  </p>
<div className="flex gap-[15%] justify-self-center">
  <div className="self-center">
     <img src={user2} alt="" />
     </div>
 
  <div className="text-start py-4">
  <p className="text-[#96BB7C] text-sm font-semibold">Regina Miles</p>
  <p className="text-[#252b42] text-xs font-semibold">Designer</p>
  </div>
</div>
</div>

    <div className="p-4 text-center py-10">
<img className="m-auto" src={stars} alt="" />
<p className="text-sm text-[#737373] py-4 ">Slate helps you see 
how many more days 
you need to work to 
reach your financial 
goal for the month 
and year.  </p>
<div className="flex gap-[15%] justify-self-center  ">
  <div className="self-center">
     <img src={user3} alt="" />
     </div>
 
  <div className="text-start py-4">
  <p className="text-[#96BB7C] text-sm font-semibold">Regina Miles</p>
  <p className="text-[#252b42] text-xs font-semibold">Designer</p>
  </div>
</div>
</div>
  </div>
</section>

<section className="w-[80%] m-auto py-[5%]">
<div className="">
  <p className="text-[#96BB7C] text-sm font-semibold">Team</p>
<p className="text-[#252B42] font-medium py-3 w-[80%] text-4xl">Our Popular Courses</p>
<p className="text-sm text-[#737373] lg:w-[50%] md:w-[80%]">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics  </p>
  </div>
  <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-[4%] py-8">
<div className="rounded-xl shadow-xl">
  <img className="rounded-t-xl w-full" src={teach1} alt="" />
  <div className="p-5 text-center">
  <p className="text-[#252b42] text-sm font-semibold">Julian Jameson</p>
  <p className="text-sm text-[#737373] py-3 ">Profession </p>
  <img className="m-auto" src={insta} alt="" />
  </div>
</div>
<div className="rounded-xl shadow-xl">
  <img className="rounded-t-xl w-full" src={teach2} alt="" />
  <div className="p-5 text-center">
  <p className="text-[#252b42] text-sm font-semibold">Julian Jameson</p>
  <p className="text-sm text-[#737373] py-3 ">Profession </p>
  <img className="m-auto" src={insta} alt="" />
  </div>
</div>
<div className="rounded-xl shadow-xl">
  <img className="rounded-t-xl w-full" src={teach3} alt="" />
  <div className="p-5 text-center">
  <p className="text-[#252b42] text-sm font-semibold">Julian Jameson</p>
  <p className="text-sm text-[#737373] py-3 ">Profession </p>
  <img className="m-auto" src={insta} alt="" />
  </div>
</div>
<div className="rounded-xl shadow-xl">
  <img className="rounded-t-xl w-full" src={teach4} alt="" />
  <div className="p-5 text-center">
  <p className="text-[#252b42] text-sm font-semibold">Julian Jameson</p>
  <p className="text-sm text-[#737373] py-3 ">Profession </p>
  <img className="m-auto" src={insta} alt="" />
  </div>
</div>
  </div>
</section>

<section className="md:mt-0 mt-[60%]">
<div className="text-center">
  <p className="text-[#96BB7C] text-sm font-semibold">Newsletter</p>
<p className="text-[#252B42] font-medium py-3 text-4xl">Watch our Courses</p>
<p className="text-sm text-[#737373] w-[50%] m-auto">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics   </p>
  </div>
  <div className="w-[60%] m-auto flex py-[12%]">
  <TextField id="outlined-basic" label="Your Email" variant="outlined" fullWidth color="success"/>
  <Button variant="contained" color='success' size="midle" >Subscribe</Button>
  </div>
</section>
<section>
  <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 w-[80%] m-auto py-10">
    <div className="">
    <p className="text-[#252b42] text-sm font-semibold py-2">Company Info</p>
  <p className="text-sm text-[#737373] py-2 ">About Us</p>
  <p className="text-sm text-[#737373] py-2 ">Carrier</p>
  <p className="text-sm text-[#737373] py-2 ">We are hiring</p>
  <p className="text-sm text-[#737373] py-2 ">Blog</p>
    </div>
    <div className="">
    <p className="text-[#252b42] text-sm font-semibold py-2">Company Info</p>
  <p className="text-sm text-[#737373] py-2 ">About Us</p>
  <p className="text-sm text-[#737373] py-2 ">Carrier</p>
  <p className="text-sm text-[#737373] py-2 ">We are hiring</p>
  <p className="text-sm text-[#737373] py-2 ">Blog</p>
    </div>
    <div className="">
    <p className="text-[#252b42] text-sm font-semibold py-2">Company Info</p>
  <p className="text-sm text-[#737373] py-2 ">About Us</p>
  <p className="text-sm text-[#737373] py-2 ">Carrier</p>
  <p className="text-sm text-[#737373] py-2 ">We are hiring</p>
  <p className="text-sm text-[#737373] py-2 ">Blog</p>
    </div>
    <div className="">
    <p className="text-[#252b42] text-sm font-semibold py-2">Company Info</p>
  <p className="text-sm text-[#737373] py-2 ">About Us</p>
  <p className="text-sm text-[#737373] py-2 ">Carrier</p>
  <p className="text-sm text-[#737373] py-2 ">We are hiring</p>
  <p className="text-sm text-[#737373] py-2 ">Blog</p>
    </div>
    <div className="">
    <p className="text-[#252b42] text-sm font-semibold py-2">Company Info</p>
  <p className="text-sm text-[#737373] py-2 ">About Us</p>
  <p className="text-sm text-[#737373] py-2 ">Carrier</p>
  <p className="text-sm text-[#737373] py-2 ">We are hiring</p>
  <p className="text-sm text-[#737373] py-2 ">Blog</p>
    </div>
  </div>
</section>
<footer className="bg-[#FAFAFA] px-[10%] py-[1.5%] flex flex-wrap justify-between ">
<p className="text-sm text-[#737373] py-2 lg:text-start justify-self-center">Made With Love By Figmaland All Right Reserved </p>
<div className="self-center justify-self-center"><img src={insta} alt="" /></div>

</footer>
    </div>
  );
}

export default App;
