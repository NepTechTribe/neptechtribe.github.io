import Head from "./head";
import Button from "./button";

function Hero() {
  const description = (
    <>
      A non-profit organization founded by group of tech-obsessed youngsters,
      <br /> concentrating on offering digital literacy programs and
      instructional tools to students
    </>
  );

  return (
    <>
      <div className="hero">
        <div>
          <Head
            head={"Leaders are those who empower others"}
            description={description}
          />
          <Button buttontext={"Explore More"} buttonclass={"herobutton"} />
        </div>
      </div>
      </>
  );
}

export default Hero;
