import { useState } from "react"
import { Footer } from "../../footer/Footer"
import { Navbar } from "../../navbar/Navbar"
import { Document } from 'react-pdf'
import axios from "axios"
import { Viewer } from '@react-pdf-viewer/core';
import { useLocation } from "react-router-dom"


export const Intern = () => {
  // const [username, setUsername] = useState("")
  const [viewpdf, setViewPdf] = useState()
  const location = useLocation();
  const { username } = location.state || {};

  // const sample = () => {
  //     const storedData = localStorage.getItem('registerData');
  
  //   const dataObject = JSON.parse(storedData);
  //   const firstName = dataObject.firstName;
  //     console.log(firstName);
  //     // setUsername(firstName)
      
  //   }
  // console.log(username);
  const ViewPdf = async () => {
    try {
          
      axios({
      method: "get",
       url: "http://localhost:5000/pdf/getpdf",
      // responseType: 'blob'
      // responseType: 'arraybuffer',
    })
        .then((res) => {
         
          console.log(res.data.pdfData);
      //     const pdfData = new Uint8Array(res.data);
      // const base64Data = btoa(String.fromCharCode(...pdfData));

      // // Set the PDF link in state
      // setViewPdf(`data:application/pdf;base64,${base64Data}`);
         
      // const pdfData = new Uint8Array(res.data);
      // const base64Data = btoa(String.fromCharCode(...pdfData));
      // const pdfUrl = `data:application/pdf;base64,${base64Data}`;
        //          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                 
        //          //       // // Create a URL for the Blob
        //                const pdfUrl = URL.createObjectURL(pdfBlob);
        //  console.log(pdfUrl);
        //  const pdfUrl = "http://localhost:5000/pdf/getpdf?param=" + encodeURIComponent(paramValue);

        //  window.open(pdfUrl)
setViewPdf(res.data)
      })
      }
     catch (error) { 
       console.log(error);
    }
    
  };
  console.log(viewpdf);
  return (
    <>
      <Navbar/>
      <main className="flex justify-center items-center">
        <div className="max-w-screen-2xl w-[95%] h-screen flex flex-col mt-48 items-center">
              <h1 className="text-7xl font-bold text-secondary">Welcome,<span className="uppercase">{username || "Guest" }</span></h1>
          <button className="text-xl font-medium text-skyBlue my-10" onClick={ViewPdf}>View your syllabus Here</button>
          {/* <Document file={viewpdf} />   */}
          <iframe src={viewpdf} width="100%" height="500px" title="PDF Viewer"></iframe>

    {/* <Viewer fileUrl={viewpdf} /> */}
</div>
      </main>
      <Footer/>
    </>
  )
}
