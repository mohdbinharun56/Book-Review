
const Contact = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl bg-base-200 rounded-md mt-10 p-10">Contact us</h1>
            <div className="border-2 border-base-200 mt-10 mb-5 p-10 rounded-md shadow-md mx-auto max-w-lg">
                <form>
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input type="text" className="w-full outline-none border border-base-200 p-2 my-2" placeholder="Enter your Name"></input>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full outline-none border border-base-200 p-2 my-2" placeholder="Enter your Email"></input>
                    <select className="w-full outline-none text-sm font-medium border border-base-200 p-2 my-2">
                        <option value="" className="text-sm font-medium">Subject</option>
                        <option value="" className="text-sm font-medium">General Inquiry</option>
                        <option value="" className="text-sm font-medium">Feedback</option>
                        <option value="" className="text-sm font-medium">Support</option>
                    </select>
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea className="w-full outline-none border border-base-200 p-2 my-2" placeholder="Message" rows={10} > </textarea>
                    <input type="submit" className="w-full outline-none border border-base-200 p-2 mt-2 bg-green-400 rounded-md hover:bg-green-800 transition font-bold cursor-pointer" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default Contact;