import Image from 'next/image'
import styles from '../page.module.css'




export default function HomeNoCard() {
  return (
<div className={`${styles.nocard} flex items-center justify-left`}>
          <div className="w-64 h-55 rounded-lg border p-4 nocard">
          
              <h3 className="text-sm mb-2 ">{"This is a blank card"}</h3>
            
          </div>
      </div>
    
    
    
  )
}
