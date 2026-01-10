
import Accordion from '../shared/accordion.jsx';

function FAQAccordion() {

    const data = [
        {
            "id": 1,
            "title": "Did you know react before you started this project?",
            "content": "I only knew some of the very basics of React. I created a simple single-page app that you can find linked at the top of this page \"Nebraska Insights\". This project helped me understand more of the nuiances and helped me learn how to better structure a React project. I still don't think I know very much, but it was a fun project."
        },
        {
            "id": 2,
            "title": "How long did it take you to finish this project?",
            "content": "I genuinely stopped keeping track...but if I had to estimate I would say in total it would have taken me over 100 hours spread out over 5-6 weeks. This includes coming up with the design (thank god for shower thoughts), building the prototype/wireframe, coding and testing (with copywrite throughout), and doing the different touchpoints on the project."
        },
        {
            "id": 3,
            "title": "Why do you like to create more work for yourself?",
            "content": "This is a question more specifically for my wife who loves to constantly ask me this question. I wanted to learn something new since this particular course was something I had a very good understanding about. With that being said, I also wanted to challenge myself to see if I could create something new that used some different things that I could apply later into my work life."
        },
        {
            "id": 4,
            "title": "Did you have fun doing this project?",
            "content": "Short answer: yeah... Long answer: I genuinely had a good time doing this project, however, there were a lot of points where this project was crushing me under the sheer amount of things I had to do. From having to learn all of the different things I didn't know (Tailwind, various React libraries, etc) to the amount of content I wanted to provide to make a good portfolio site. Yeah, I had a lot of fun - but there were definitely a lot of stressful moments as well."
        },
        {
            "id": 5,
            "title": "Are there any other socials or resources you can share?",
            "content": (
                <span>
                    Sure. You can find my github and the source code for this project <a href="https://github.com/cvanhorn293/gaming-and-me-portfolio" target="_blank" rel="noopener noreferrer" className="text-sky-blue underline">here</a>. You're also able to find my LinkedIn <a href="https://www.linkedin.com/in/chris-van-horn-09b355a1/" target="_blank" rel="noopener noreferrer" className="text-sky-blue underline">here</a>."
                </span>
            )
        }
    ]

    return <Accordion data={data} />;
}

export default FAQAccordion;