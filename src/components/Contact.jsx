import ContactMeButton from "./buttons/ContactMeButton";

function Contact() {
  return (
    <section
      className="container mx-auto flex flex-col content-center items-center gap-3 p-5 md:p-8 lg:p-60 text-center "
      id="Contact"
    >
      <h1 className="text-orange">03.What's next ?</h1>

      <h5 className="text-4xl lg:text-6xl	text-headerColor mb-2 lg:mb-5 font-semibold">
        Get In Touch
      </h5>

      <p className="lg:text-xl	text-textColor max-w-2xl mb-3 lg:mb-6">
        I am currently looking for a fulltime postion as a Front-end, Back-end
        developer if there is a opportunity please contact me.
      </p>

      <ContactMeButton />
    </section>
  );
}

export default Contact;
