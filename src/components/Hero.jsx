import photo from '../assets/photo.jpg'

export default function Hero() {
    return (
        <section>
            <img className='w-3/4 mx-auto rounded-full border-5 border-[#3A4750]' src={photo}/>
            <div className='flex flex-col py-6 gap-[6px]'>
                <h2 className='font-medium text-2xl text-[#303841]'>Web and Mobile Developer</h2>
                <span className='flex gap-2 text-[#3A4750]'><i className="ri-map-pin-3-line"></i> Accra, Ghana</span>
                <p className='text-[#3A4750] mb-3 text-[14px]'>Hi, I’m Denzel Ashitey, a web app and mobile app developer. I build production ready apps, websites and mobile applications.</p>
                <p className='text-[#3A4750] text-[14px]'>If you want to know more about me, check my <span className='text-[#2185D5] underline'>about page</span></p>
            </div>
        </section>
    )
}