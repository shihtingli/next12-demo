import Image, { ImageLoader } from 'next/image'
import Cat1 from '../../public/cats/cat-1.jpeg'
import Cat2 from '../../public/cats/cat-2.jpeg'
import Cat3 from '../../public/cats/cat-3.jpeg'
import Cat4 from '../../public/cats/cat-4.jpeg'
import Cat5 from '../../public/cats/cat-5.jpeg'
import Cat6 from '../../public/cats/cat-6.jpeg'

const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width / 2}&q=${quality || 75}`
}
function ImagePage() {
  return (
    <>
      <h1>My Cat</h1>
      <div className="card">
        <div
          className="flex md:align-content-start align-content-center flex-wrap card-container cyan-container"
          style={{}}
        >
          {/* <div
            className="flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"
            style={{ maxWidth: '700px' }}
          >
            <Image src={Cat1} alt="Picture of the author" priority />
          </div> */}
          <div
            className="flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"
            style={{ maxWidth: '700px' }}
          >
            <Image src={Cat2} alt="Picture of the author" priority />
          </div>
          <div
            className="flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"
            style={{ maxWidth: '700px' }}
          >
            <Image src={Cat3} alt="Picture of the author" priority />
          </div>
          <div
            className="flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"
            style={{ maxWidth: '700px' }}
          >
            <Image src={Cat4} alt="Picture of the author" priority />
          </div>
          <div
            className="flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"
            style={{ maxWidth: '700px' }}
          >
            <Image src={Cat5} alt="Picture of the author" priority />
          </div>
          <div
            className="flex align-items-center justify-content-center bg-cyan-500 font-bold text-white border-round m-2"
            style={{ maxWidth: '700px' }}
          >
            <Image src={Cat6} alt="Picture of the author" priority />
          </div>
        </div>
      </div>

      <Image
        src={Cat1}
        alt="Picture of the author"
        // layout="responsive"
        layout="intrinsic"
        // width={500}
        // height={500}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        // priority
      />
      <Image
        src={Cat2}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        // priority
      />
      <Image
        src={Cat3}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        // priority
      />
      <Image
        src={Cat4}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        // priority
      />
      <p>So cute!</p>
    </>
  )
}

export default ImagePage
