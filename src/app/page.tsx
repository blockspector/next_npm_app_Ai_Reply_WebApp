import Image from 'next/image'
import Home from './components/HomeTest'
import Comp2 from './components/Comp2'
import AiImage from './images/NewAiBlue23Testpp.png'
import Logo from './images/MainLogoBlueMail.svg'

export default function One() {
  return (
    <>
    
      <div className="flex justify-left items-center "> {/* Center the image vertically and horizontally */}
        <Image src={AiImage} alt="Ai Me Logo" className="logo" />
      </div>
      {Home()}
      {Comp2()}
      {Comp2()}
      {Comp2()}
    </>
  )
};
