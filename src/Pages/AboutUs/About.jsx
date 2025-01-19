const About = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl bg-base-200 rounded-md mt-10 p-10">About Us!</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <figure className="mt-10 rounded-md border border-base-200 p-2 md:hover:scale-105 hover:border-[#A59784] transition hover:opacity-50">
                    <img src="./about.jpg" alt="primary_image" className="h-96" />
                </figure>
                <figure className="mt-10 rounded-md border border-base-200 p-2 md:hover:scale-105 hover:border-[#A59784] transition hover:opacity-50">
                    <img src="./about1.jpeg" alt="secondary_image" width={500} className="h-96" />
                </figure>
                <figure className="mt-10 rounded-md border border-base-200 p-2 md:hover:scale-105 hover:border-[#A59784] transition hover:opacity-50">
                    <img src="./about2.jpeg" alt="tertary_image" width={500} className="h-96" />
                </figure>
            </div>

            <div>
                <h3 className="text-start font-bold text-2xl mt-5 font-sans">Introduction</h3>
                <p className="text-base-content font-light font-serif text-xl my-5">Welcome to Book Reviewer! We are passionate about connecting readers with the best books. Our platform offers curated collections, insightful reviews, and user-friendly tools to enhance your reading experience.</p>
            </div>
            <div>
                <h3 className="text-start font-bold text-xl mt-5 font-sans">Mission</h3>
                <p className="text-base-content font-light font-serif text-base my-5">Our mission is to create a space where book lovers can explore, share, and discover books that inspire and educate.</p>
            </div>
            <div>
                <h3 className="text-start font-bold text-xl mt-5 font-sans">Vision</h3>
                <p className="text-base-content font-light font-serif text-base my-5">To be the go-to platform for book enthusiasts worldwide.</p>
            </div>
            <div>
                <h3 className="text-start font-bold text-xl mt-5 font-sans">Team Section</h3>
                <p className="text-base-content font-light font-serif text-base my-5">
                    <ul>
                        <li>Brief bios of the team members or a note on the creators.</li>
                        <li>Example: Founded by a group of avid readers and tech enthusiasts, our team is dedicated to delivering the best user experience.</li>
                    </ul>
                </p>
            </div>
        </div>

    );
};

export default About;