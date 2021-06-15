const projectsData = {
    data: [
        {
            title: "Advanced Precalculus",
            preview: "I turned my notes from tenth grade math class into an official textbook for future students to use.",
            tags: ["LaTeX"],
            description: `<h3>Description</h3>
            <p>This is a 353-page textbook that covers mostly precalculus topics with some introductory calculus and more advanced topics often left out of a typical high school curriculum. In particular, this text emphasizes the art of mathematical proof, with an abundant supply of theorems, lemmas, and exercises. The main purpose is to aid readers who wish to learn precalculus and advanced supplemental topics through a more theoretical and abstract perspective and challenge their mathematical critical thinking skills beyond simple computations.</p>
            <h3>History</h3>
            <p>A few weeks into the class titled "Advanced Precalculus with Discrete Topics," I, a high school sophomore at the time, found its emphasis on proofs and mathematical rigor challenging. To keep up, I religiously updated my stack of personal notes, digitized via <a href="https://www.latex-project.org/">LaTeX</a>, daily. Not only did I come to appreciate learning *why* formulas worked, but I also loved explaining concepts clearly.

            My notes quickly piled up, leaving me to wonder what I could possibly do with them. As the class did not follow an official textbook, I realized that my notes could serve as a useful resource for future students. After months of revising and discussing with teachers, I eventually published a textbook, now available for purchase online on <a href="https://www.amazon.com/dp/0578479435/ref=cm_sw_em_r_mt_dp_U_cnQ.EbRMQZRY3">Amazon</a>, <a href="https://www.barnesandnoble.com/w/advanced-precalculus-daniel-kim/1131129402?ean=9780578479439">Barnes & Noble</a>, <a href="https://www.thriftbooks.com/w/advanced-precalculus_michael-abramson_daniel-kim/20883506/#isbn=0578479435">ThriftBooks</a>, <a href="https://www.bookdepository.com/Advanced-Precalculus-Daniel-Kim/9780578479439">Book Depository</a>, and <a href="https://books.google.com/books?id=53ljwwEACAAJ&sitesec=buy&source=gbs_buy_r">more</a>.
            
            My school's principal wrote a gracious <a href="#">letter</a> and my math teacher decided to use it as the official textbook for the class. I also had the opportunity to present my textbook in front of a group of graduate students and professors, who were visiting our high school while the administration was explaining the school’s math curriculum. </p>`,
            startDate: null,
            endDate: new Date(2019, 2),
            coverPhoto: "advprecalc.JPG",
            externalLink: "https://www.amazon.com/dp/0578479435/ref=cm_sw_em_r_mt_dp_U_cnQ.EbRMQZRY3",
            path: "adv-precalc"
        }, {
            title: "BCA Math Team Website",
            preview: "I developed an official website for my high school math team to host files, support dynamic updates, and display blog posts. This conveniently allows coaches to post updates and members to access resources.",
            tags: ["HTML","CSS","JavaScript","Firebase"],
            description: `<p>Having revamped the <a href="https://holbrook.bergen.org/">website</a> for my high school’s annual math competition, I set out to develop a new website for our math team. Previously, we relied on mass emails to get the latest information on our upcoming meetings and contests and received lecture notes, problem sets, and past contest papers via email attachments. This meant that we often had to refer back to our inboxes and save attached files to our computers locally.

            A single website that any student or teacher can access would handle these inconveniences. Students can visit the website’s Archive page to work on past problem sets or the Updates page to read the latest news. The site also provides links to various resources to aid members in contest preparation. In addition, outsiders interested in our program now have a front-end to look at.
            
            While developing the site, I used the CSS framework <a href="https://materializecss.com/">Materialize</a> for responsive design. Since I had to ensure that updates were only posted by a limited number of people, I implemented user authentication via <a href="https://firebase.google.com/">Firebase</a>.</p>`,
            startDate: new Date(2019, 8),
            endDate: new Date(2020, 5),
            coverPhoto: "bca-math-team-website.png",
            externalLink: "https://bcamathteam.org/",
            path: "math-team-website"
        }, {
            title: "JHMMC Website",
            preview: "A revamped website for the Joe Holbrook Memorial Math Competition, a school-run event that annually attracts over 400 middle school students in the region.",
            tags: ["HTML","CSS","JavaScript"],
            description: "",
            startDate: null,
            endDate: null,
            coverPhoto: "jhmmc-website.png",
            externalLink: "https://github.com/danielkimcs/holbrook-website/",
            path: ""
        }, {
            title: "BS Poker",
            preview: "An implementation of BS Poker as a pass-and-play single-device Python 3 Tkinter application.",
            tags: ["Python"],
            description: "",
            startDate: null,
            endDate: null,
            coverPhoto: "bs-poker.png",
            externalLink: "https://github.com/danielkimcs/BS-poker",
            path: ""
        }, {
            title: "LMS Web Scraper",
            preview: "Python scripts using RoboBrowser and BeautifulSoup that scrape information from my high school's learning management system (Schoology) to generate a list of students, teachers, and corresponding classes.",
            tags: ["Python"],
            description: "",
            startDate: null,
            endDate: null,
            coverPhoto: "",
            externalLink: "https://github.com/danielkimcs/bca-schoology-scraper",
            path: ""
        }
    ]
};

export default projectsData;