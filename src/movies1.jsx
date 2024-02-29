import Movie1 from "./Movie1.jsx"
import movies1Data from "./data.js";
import movies2Data from "./data1.js";
import movies3Data from "./data2.js";
import movies4Data from "./data3.js";

// import movies1Data from "./data.jsx"
// import movies2Data from "./data.jsx"
function Movies1 ()
{
    return (<div>
        <h4 className='text-center'>Movies<span className='badge bg-danger text-light'>65</span></h4>
        <br />
        <br />
        <br />
        <h3><span className='text-white bg-dark'>Blockbuster</span></h3>
        <br />
            <div className='Movies1'>
            {
                movies1Data.map((m) => (
                    <Movie1 url={m.image} titel={m.title} />
                ))
            }

        </div>
        <br />
        <br />
        <br />
        <h3><span className='text-white bg-dark'>LOVE</span></h3>
        <br />
            <div className='Movies2'>
            {
                movies2Data.map((m) => (
                    <Movie1 url={m.image} titel={m.title} />
                ))
            }
            </div>
            <br />
        <br />
        <br />
        <h3><span className='text-white bg-dark'>ACTION</span></h3>
        <br />
            <div className='Movies2'>
            {
                movies3Data.map((m) => (
                    <Movie1 url={m.image} titel={m.title} />
                ))
            }
            </div>
            <br />
        <br />
        <br />
        <h3><span className='text-white bg-dark'>THRILLER</span></h3>
        <br />
            <div className='Movies2'>
            {
                movies4Data.map((m) => (
                    <Movie1 url={m.image} titel={m.title} />
                ))
            }
            </div>
           </div>
        
    )
}
export default Movies1;