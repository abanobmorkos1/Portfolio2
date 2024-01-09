import { useState, useEffect } from "react";

function Body (){
    const attributes = ["Software Engineer", "Full Stack Developer", "Backend Developer" ,"Frontend Developer"];
        const [currentIndex, setCurrentIndex] = useState(0);
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % attributes.length);
          }, 1300);
      
          return () => clearInterval(interval);
        }, []);
    return <>
        <div className="intro">
        <h1 className='HW'>Hello, World!</h1>
        <img src="https://media.licdn.com/dms/image/D4E03AQEhNGnTmIHRfg/profile-displayphoto-shrink_800_800/0/1696491861573?e=1708560000&v=beta&t=s8v5xTRsSD6KWtOSdtpp07nbOZS1vxgwdGMtPM65qLI"/>
        </div>
        <h1 className="desc"><>I am Abe , a {attributes[currentIndex]}</></h1>


        {/* <div className="">
            <div> 
                <h1>Languages</h1>
                <p> JavaScript</p>
                <p> HTML5</p>
                <p> Python</p>
                <p> TypeScript</p>
            </div>
            <div>
                <h1>Frameworks</h1>
                <p> Node.js</p>
                <p> React.js</p>
                <p> Express.js</p>
                <p> jQuery</p>
                <p> Flask</p>
                <p> FastApi</p>
            </div>
            <div >
                <h1>Database</h1>
                <p> MongoDB</p>
                <p> MySQL</p>
                <p> Prisma</p>
                <p> Neon</p>
            </div>
        </div> */}
    </>
}

export default Body;
