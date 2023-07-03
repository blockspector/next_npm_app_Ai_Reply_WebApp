import Image from 'next/image'
import styles from '../page.module.css'


const title = 'Welcome to Ai Me'
const subHeader = 'This is v.1.0'
const text = 'Use this tool to upload text you have wrote and then get Ai to respond to data as if it was you.'

export default function Home() {
  return (
    <div className=" mx-8 max-w-xs overflow-hidden bg-blue-600 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-white uppercase dark:text-white">NIKE AIR</h1>
        <p className="mt-1 text-sm text-white dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
    </div>


    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">$129</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
    </div>
    
</div>


    
    
    
  )
}
