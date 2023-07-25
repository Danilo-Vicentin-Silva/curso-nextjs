import Image from "next/image"

const Background = () => {
  return (
    <div>
      <Image
        src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Star-Wars-Backgrounds.jpg"
        alt="backgrond start wars"
        fill
        className="-z-50 opacity-30 object-cover"
      />
    </div>
  )
}

export default Background
