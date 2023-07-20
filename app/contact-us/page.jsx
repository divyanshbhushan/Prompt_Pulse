import Image from "next/image"

const Contact = () => {
  return (
    <>
    <section className=" flex flex-col items-center justify-center">
    <h3 className=" bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-600 bg-clip-text text-transparent text-center font-bold text-5xl">Contact us</h3>

    <div className="contact_card mt-20 rounded-3xl glassmorphism flex flex-col border-2 items-center justify-center">
    <h5 className=" text-3xl font-bold text-gray-800 mb-10">
        Feel Free to Contact us
       </h5>
      <span className=" flex flex-col items-center justify-center font-semibold text-2xl text-violet-700">
      <Image
        src="/assets/images/logo.png"
        width={110}
        height={110}
        className=" border rounded-full bg-gray-200 drop-shadow-md mb-4"
       />
       Prompt Pulse
       </span>
  
       <div className="flex w-10/12 items-center mt-10 justify-evenly">
        <a href="mailto:contact@divyanshbhushan.xyz">
        <i class="bi bi-envelope-fill text-gray-600 text-2xl"></i>
        </a>
        <a href="">
          <i class="bi bi-instagram text-gray-600 text-2xl"></i>
        </a>
        <a href="">
          <i className="bi bi-facebook text-2xl text-gray-600"></i>
        </a>
        <a href="">
          <i className="bi bi-twitter text-2xl text-gray-600"></i>
        </a>
       </div>
    </div>
    </section>
    </>
  )
}

export default Contact