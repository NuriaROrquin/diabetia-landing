import {Footer} from "../components/footer";
import {Navigation} from "../components/navigation";
import {Banner} from "../components/banner";

export default function Page() {
    return (
        <>
            <Navigation />
            <Banner />

            <section className="bg-white flex flex-col py-20">
                <h2 className="mb-12 text-5xl font-bold tracking-tight text-blue-secondary md:text-4xl xl:text-4xl mx-auto">
                    En esta parte iría el video
                </h2>

                <div className="container mx-auto w-1/2">
                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                        style={{paddingTop: "56.25%"}}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                            allowFullScreen="" data-gtm-yt-inspected-2340190_699="true"
                            id="240632615"></iframe>
                    </div>
                </div>

            </section>

            <Footer/>
        </>
    );
}
