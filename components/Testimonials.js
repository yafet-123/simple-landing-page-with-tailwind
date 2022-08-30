import Image from 'next/image'
export default function Testimonials(){
    return(
        <section id="testimonials">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    What is Different About Manage?
                </h2>
                <div className="my-5 flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3">
                        <Image src="/avatar-anisha.png" className="w-16 -mt-14" alt="" width={50} height={50} />
                        <h5 className="text-lg font-bold">Anisha Li</h5>
                        <p className="text-sm text-slate-900">
                            “Manage has supercharged our team’s workflow. The ability to
                            maintain visibility on larger milestones at all times keeps
                            everyone motivated.”
                        </p>
                    </div>
                    
                    <div className="my-5 flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:flex md:w-1/3 md:my-0">
                        <Image src="/avatar-ali.png" className="w-16 -mt-14" alt="" width={50} height={50} />
                        <h5 className="text-lg font-bold">Ali Bravo</h5>
                        <p className="text-sm text-slate-900">
                            “We have been able to cancel so many other subscriptions since
                            using Manage. There is no more cross-channel confusion and
                            everyone is much more focused.”
                        </p>
                    </div>

                    <div className="my-5 flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:flex md:w-1/3 md:my-0">
                        <Image src="/avatar-richard.png" className="w-16 -mt-14" alt="" width={50} height={50} />
                        <h5 className="text-lg font-bold">Richard Watts</h5>
                        <p className="text-sm text-slate-900">
                            “Manage has supercharged our team has workflow. The ability to
                            maintain visibility on larger milestones at all times keeps
                            everyone motivated.”
                        </p>
                    </div>
                </div>
                <div className="my-16">
                    <a
                        href="#"
                        className="p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-700"
                        >Get Started</a
                    >
                </div>
            </div>
        </section>
    )
}