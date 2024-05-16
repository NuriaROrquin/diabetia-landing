import {Footer} from "../components/footer";
import {Navigation} from "../components/navigation";
import {Banner} from "../components/banner";
import {Input} from "../components/input";
import {EmailOutlined, Person2Outlined} from "@mui/icons-material";
import {ButtonBlue, ButtonOrange} from "../components/button";

export default function Page() {
    return (
        <div className="bg-blue-primary">
            <Navigation />
            <Banner />

            <section className="bg-white flex flex-col py-20">
                <h2 className="mb-12 text-2xl font-bold tracking-tight text-blue-secondary sm:text-3xl xl:text-4xl mx-auto">
                    Conocenos
                </h2>

                <div className="container mx-auto w-11/12 lg:w-1/2">
                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                        style={{paddingTop: "56.25%"}}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src="https://www.youtube.com/embed/jKT9ClNgR0c?si=eUzXwT1WnnIYDqnm;origin=https%3A%2F%2Fmdbootstrap.com"
                            allowFullScreen="" data-gtm-yt-inspected-2340190_699="true"
                            id="240632615"></iframe>
                    </div>
                </div>

            </section>

            <section className="flex flex-col pt-20 bg-blue-primary container mx-auto">
                <h2 className="mb-12 text-2xl font-bold tracking-tight text-white sm:text-3xl xl:text-4xl mx-auto">
                    Sumate
                </h2>
                <div className="flex justify-center">
                    <div className="w-1/4">
                        <div className="w-full text-white mb-4">
                            Dejanos tu email y nos contactamos con vos!
                        </div>

                        <div className="text-gray-600">
                            <Input id="name" type="name" placeholder="Ingresá tu nombre" icon={<Person2Outlined />} width="w-full" />
                        </div>
                        <div className="container mx-auto text-gray-600">
                            <Input id="email" type="email" placeholder="Ingresá tu email" icon={<EmailOutlined />} width="w-full" />
                        </div>
                        <ButtonOrange label="Enviar" width="w-full" />
                    </div>
                    <div className="h-auto">
                        <img src="/senalando.webp" className="" alt="persona midiendose con glucómetro" />
                    </div>
                </div>

            </section>


            <Footer/>
        </div>
    );
}
