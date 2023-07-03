import Image from 'next/image'
import Home from './components/HomeTest'
import Card from './components/Card'
import HomeNoCard from './components/HomeNoCard'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import AiImage from './images/NewAiBlue23Testpp.png'
import Logo from './images/MainLogoBlueMail.svg'

export default function One() {
  return (
    <>
      <div className="flex justify-left items-center fixed headBanner "> {/* Center the image vertically and horizontally */}
        <Image src={AiImage} alt="Ai Me Logo" className="logo" />
      </div>
      {HomeNoCard()}
      {Home()}
      {Comp2()}
      {Comp2()}
      {Comp2()}
      {Comp3()}
    </>
  )
};
