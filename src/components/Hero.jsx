function Hero() {
  return (
    <section className="text-white flex flex-col justify-center container mx-auto p-6 min-h-screen pt-16 2xl:pt-0">
      <h1 className="text-orange mb-7 ">Hi my name is</h1>
      <div className="text-clamp font-semibold min-w-max text-headerColor">
        Mohamed Elshamy.
      </div>
      <div className="text-clamp font-semibold mt-1.5 max-w-[1200px] text-textColor">
        I build things for the web.
      </div>
      <div className="max-w-[650px] mt-5 text-[18px] text-textColor">
        I'm a software engineer specializing in building exceptional digital
        experiences for the web. I write both front-end and back-end code.
      </div>
    </section>
  );
}

export default Hero;
