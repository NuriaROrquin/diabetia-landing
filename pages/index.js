import {Footer} from "../components/footer";
import {Navigation} from "../components/navigation";
import {Banner} from "../components/banner";
import {Input} from "../components/input";
import {EmailOutlined, Person2Outlined} from "@mui/icons-material";
import {ButtonOrange} from "../components/button";

export default function Page() {
    return (
        <div className="bg-blue-primary">
            <Navigation/>
            <Banner/>

            <section className="bg-white flex flex-col py-20" id="conocenos">
                <h2 className="mb-12 text-2xl font-bold tracking-tight text-blue-secondary sm:text-3xl xl:text-4xl mx-auto">
                    Conocenos
                </h2>

                <h5 className="mb-2 tracking-tight text-blue-primary sm:text-xl px-8 xl:text-lg mx-auto">
                    En un breve video te mostramos todo lo que podés realizar utilizando DiabetIA en tu día a día.
                </h5>

                <div className="container mx-auto w-11/12 lg:w-1/2 pb-20">
                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                        style={{paddingTop: "56.25%"}}>
                        <iframe
                            className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                            src="https://www.youtube.com/embed/jKT9ClNgR0c?si=ULhUOwJOFcGtn1Jy?rel=0"

                            allowFullScreen="" data-gtm-yt-inspected-2340190_699="true"
                            id="240632615"></iframe>
                    </div>
                </div>

            </section>

            <section className="flex flex-col pt-20 bg-blue-primary container mx-auto" id="sumate">
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl xl:text-4xl mx-auto">
                    Sumate
                </h2>
                <h5 className="mb-12  tracking-tight text-white sm:text-xl px-8 xl:text-lg mx-auto">
                    ¿Te interesa probar la aplicación? ¿Considerás que puede ser útil para tu día a día?
                </h5>
                <div className="flex justify-center">
                    <div className="lg:1/2 pl-8 2xl:w-1/4">
                        <div className="w-full text-white mb-4">
                            Dejanos tu email y nos contactaremos con vos!
                        </div>

                        <div className="text-gray-600">
                            <Input id="name" type="name" placeholder="Ingresá tu nombre" icon={<Person2Outlined/>}
                                   width="w-full"/>
                        </div>
                        <div className="container mx-auto text-gray-600">
                            <Input id="email" type="email" placeholder="Ingresá tu email" icon={<EmailOutlined/>}
                                   width="w-full"/>
                        </div>
                        <ButtonOrange label="Quiero que me contacten" width="w-full font-bold"/>
                    </div>
                    <div className="h-auto">
                        <img src="/senalando.webp" className="opacity-30 lg:opacity-100 lg:h-400 2xl:h-auto"
                             alt="una mujer señalando el formulario de contacto"/>
                    </div>
                </div>

            </section>

            <section className="bg-white flex flex-col py-20" id="nuestraWeb">
                <h2 className="mb-12 text-2xl font-bold tracking-tight text-blue-secondary sm:text-3xl xl:text-4xl mx-auto">
                    Aprende a utilizar nuestra web
                </h2>

                <h5 className="mb-2 tracking-tight text-blue-primary sm:text-xl px-8 xl:text-lg mx-auto">
                    En un breve video te mostramos lo fácil e intuitiva que es nuestra web.
                </h5>

                <div className="container mx-auto w-11/12 lg:w-1/2 pb-20">
                    <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                        style={{paddingTop: "56.25%"}}>
                        <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/HsSjp6apUXA?si=HVPeTYHK-XsVBa6W&rel=0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
    );
}
