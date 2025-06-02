import Picture1 from "../assets/Me.jpg";

//This is the Landing Page
function App() {
  return (
    <>
      <div className="tw:border tw:rounded-3xl tw:bg-blue-400 tw:w-1/2 tw:h-auto tw:m-2 tw:justify-self-center">
        <div className="tw:grid tw:grid-cols-2">
          <img
            src={Picture1}
            alt="Picture"
            className="tw:p-4 tw:rounded-4xl tw:w-full tw:md:object-cover"
          />
          <p className="tw:pt-10">
            <b>
              Hi, I’m Darren Paul S. Pascual a graduating Information Technology
              student with a passion for front-end web development.
            </b>
            <br />I specialize in crafting responsive, intuitive, and visually
            engaging websites using React and Tailwind CSS. I thrive on turning
            ideas into interactive experiences that are not only functional but
            also beautifully designed.
            <br />
            Over the past few years, I’ve worked on personal and academic
            projects that sharpened my skills in modern JavaScript frameworks,
            responsive UI design, and clean, maintainable code. I'm constantly
            learning and love diving into new tools and techniques that push the
            boundaries of what I can build.
            <br />
            Whether I’m coding a sleek landing page, building a dynamic web app,
            or fine-tuning pixel-perfect layouts, I bring energy, creativity,
            and attention to detail to every project I take on.
            <br />
            Let’s build something great together.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
