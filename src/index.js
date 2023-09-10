import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Book from "./components/book";
import Gallery from "./components/gallery";
import KidsGallery from "./components/KidsGallery";
import Services from "./components/services";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="services" element={<Services />} />
      <Route path="booking" element={<Book />} />
      <Route path="kidgallery" element={<KidsGallery />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);