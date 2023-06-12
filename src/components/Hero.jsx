function Hero() {
  return (
    <section className="h-screen container mx-auto flex flex-col justify-center p-5 md:p-8">
      <div className="max-w-screen-md">
        <h1 className="text-orange">Hi my name is</h1>
        <div className="text-headerColor  text-3xl md:text-7xl mt-3">
          Mohamed Elshamy.
        </div>
        <div className="text-textColor text-2xl mt-3">
          I build things for the web.
        </div>
        <div className="text-textColor text-base md:text-lg mt-4 ">
          I'm a software engineer specializing in building exceptional digital
          experiences for the web. I write both the front-end and the back-end
          code.
        </div>
      </div>
    </section>
  );
}

export default Hero;
