import Image from 'next/image'
import styles from '../page.module.css'


const title = 'Hello?'
const subHeader = 'This is v.1.0'
const text = 'Use this tool to upload text you have wrote and then get Ai to respond to data as if it was you.'

export default function Comp2() {
  return (
    <div className={`${styles.card} flex items-center justify-center`}>
      <div className="w-64 h-55 rounded-lg border p-4 card">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <h3 className="text-sm mb-2 btext">{subHeader}</h3>
        <p className="text-base">{text}</p>
      </div>
    </div>
    
    
  )
}
