import Image from "./components/Image"

const Homepage = () => {
  return (
    <div className='bg-background text-foreground'>
      <Image path="general/post.jpeg" alt="test" w={600} h={400}/>
    </div>
  )
}

export default Homepage