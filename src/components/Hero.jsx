function Hero() {
  return (
    <section className="h-screen container mx-auto flex flex-col justify-center p-5 md:p-8 ">
      <h1 className="text-orange text-sm">Hi my name is</h1>
      <div className="text-headerColor text-3xl md:text-5xl lg:text-7xl mt-3 font-semibold mt-5">
        Mohamed Elshamy.
      </div>
      <div className="text-textColor text-xl md:text-5xl  mt-2 md:mt-5 font-semibold">
        I build things for the web.
      </div>
      <div className="text-textColor mt-3 md:mt-7  text-xl max-w-screen-md">
        I'm a software engineer specializing in building exceptional digital
        experiences for the web. I write both front-end and back-end code.
      </div>
    </section>
  );
}

export default Hero;
