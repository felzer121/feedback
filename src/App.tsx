import React, {useState} from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import {motion} from 'framer-motion'

function App() {
    (function(){
        emailjs.init("user_YWFJ05qbxsCx6oYYopJWA");
    })();
    const [smile, setSmile] = useState({
        poop: 0,
        work: 0,
        good: 0
    })

    const templateParams = {
        poop: `😞  ${smile.poop}`,
        work: `😐  ${smile.work}`,
        good: `😁  ${smile.good}`
    }

    const send = () => {
        console.log(smile)
        emailjs.send('service_ny8ng2v','template_0c3aueu', templateParams, )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
  return (
    <div className="App">
        <div className="lesson">
            <h2>Как прошел урок?</h2>
            <div className="smile">
                <motion.img src="https://static.tildacdn.com/tild6562-6633-4339-b761-633339643033/image.png"
                            whileTap={{
                                scale: [1, 2, 2, 1, 1],
                                borderRadius: ["20%", "25%", "30%", "40%", "50%"],
                            }}
                            onClick={()=>setSmile({...smile, poop: smile.poop + 1})} alt=""/>
                <motion.img src="https://static.tildacdn.com/tild6430-6533-4562-b762-333930393363/image.png"
                     whileTap={{
                         scale: [1, 2, 2, 1, 1],
                         borderRadius: ["20%", "25%", "30%", "40%", "50%"],
                     }}
                     onClick={()=>setSmile({...smile, work: smile.work + 1})} alt=""/>
                <motion.img src="https://static.tildacdn.com/tild3663-3237-4739-a662-623634313533/image.png"
                            whileTap={{
                                scale: [1, 2, 2, 1, 1],
                                borderRadius: ["20%", "25%", "30%", "40%", "50%"],
                            }}
                            onClick={()=>setSmile({...smile, good: smile.good + 1})} alt=""/>
            </div>
            <button onClick={send} className='button'>Отправить</button>
        </div>
    </div>
  );
}
export default App;
