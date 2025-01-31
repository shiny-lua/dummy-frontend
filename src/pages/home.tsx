import { Link } from "react-router-dom";
import Layout from "../components/layout";

const Home = () => {
    return (
        <Layout>
            <div className="bg-primary mx-30">
                <section className="flex justify-between items-center py-30">
                    <div className="flex w-full justify-center items-center gap-20">
                        <div>
                            <img src="/image/icon/bot-left.png" alt="" className="w-60" />
                        </div>
                        <div className="w-full">
                            <div className="text-center font-bold leading-[77.33px] text-[77.33px] text-white">
                                <div>Create faceless</div>
                                <div>videos in <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">seconds</span> with AI</div>
                            </div>
                            <div className="flex justify-center items-center mt-10 text-white text-center text-[21.33px] leading-[33.33px] mx-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th.</div>
                            <div className="flex justify-center items-center mt-16">
                                <Link className="text-[20px] bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] px-7 py-5 mx-[1.5px] z-10 text-[18px] font-semibold text-white rounded-full flex justify-center items-center gap-4" to="/signup">
                                    <div>Get Started</div>
                                    <div className="flex justify-center items-center bg-white rounded-full p-2">
                                        <img src="/image/icon/arrow-right.png" alt="" className="w-4 h-4" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src="/image/icon/blend-group-1.png" alt="" className="w-60" />
                        </div>
                    </div>
                </section>
                <section className="flex justify-center items-center gap-10">
                    {[...Array(5)].map((_, i) => (
                        <div key={i}>
                            <img src={`/image/home/image-${i + 1}.png`} alt="" />
                            <div className="text-white text-center text-[29.33px] leading-[33.33px] mt-10">Friendship Day</div>
                        </div>
                    ))}
                </section>
                <section className="mt-80 relative">
                    <img src="/image/icon/bot-right.png" alt="" className="absolute top-0 right-10" />
                    <div>
                        <div className="text-white text-center font-semibold text-[64px] leading-[64px] mt-10">Create Viral videos <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">10x faster</span></div>
                        <div className="text-white/60 text-center text-[21.33px] leading-[33.33px] mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has</div>
                    </div>
                    <div className="mt-20 flex flex-col gap-10">
                        <div className="flex gap-30">
                            <div className="relative w-full">
                                <div className="bg-[#2f3131] flex p-6 rounded-2xl items-center gap-10 z-10">
                                    <img src="/image/icon/viral-clips.png" alt="" />
                                    <div className="flex flex-col">
                                        <div className="text-[#D760BA] text-[30px] leading-[30px] font-semibold">Viral Clips</div>
                                        <div className="text-white/80 text-[22px]">Generate AI video</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full ">
                                <div className="bg-[#2f3131] flex p-6 rounded-2xl items-center gap-10 z-10 relative">
                                    <img src="/image/icon/twitter-threads.png" alt="" />
                                    <div className="flex flex-col">
                                        <div className="text-[#A8ACFF] text-[30px] leading-[30px] font-semibold">Twitter Threads</div>
                                        <div className="text-white/80 text-[22px]">Auto captions video</div>
                                    </div>
                                <div className="w-10 h-10 absolute top-0 left-0 rounded-2xl" 
                                    style={{ 
                                        borderBottom: '1px solid #FF0000',
                                        borderLeft: '1px solid #FF0000'
                                    }}>
                                </div>
                                </div>

                            </div>
                            <div className="relative w-full">
                                <div className="bg-[#2f3131] flex p-6 rounded-2xl items-center gap-10 z-10">
                                    <img src="/image/icon/song-lyrics.png" alt="" />
                                    <div className="flex flex-col">
                                        <div className="text-[#A8ACFF] text-[30px] leading-[30px] font-semibold">Song Lyrics</div>
                                        <div className="text-white/80 text-[22px]">Story Video</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-30">
                            <div className="relative w-full">
                                <div className="bg-[#2f3131] flex p-6 rounded-2xl items-center gap-10 z-10">
                                    <img src="/image/icon/fake-text.png" alt="" />
                                    <div className="flex flex-col">
                                        <div className="text-[#A8ACFF] text-[30px] leading-[30px] font-semibold">Fake Text</div>
                                        <div className="text-white/80 text-[22px]">Fake text message story</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full ">
                                <div className="bg-[#2f3131] flex p-6 rounded-2xl items-center gap-10 z-10">
                                    <img src="/image/icon/split-screen.png" alt="" />
                                    <div className="flex flex-col">
                                        <div className="text-[#88E1DE] text-[30px] leading-[30px] font-semibold">Split Screen</div>
                                        <div className="text-white/80 text-[22px]">Split Screen Video</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full">
                                <div className="bg-[#2f3131] flex p-6 rounded-2xl items-center gap-10 z-10">
                                    <img src="/image/icon/reddit-story.png" alt="" />
                                    <div className="flex flex-col">
                                        <div className="text-[#F5AE8C] text-[30px] leading-[30px] font-semibold">Reddit Story</div>
                                        <div className="text-white/80 text-[22px]">Convert reddit post to video</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-30 flex justify-center gap-40">
                    <div className="flex flex-col w-1/3">
                        <div className="text-white text-[32px] leading-[45.33px] font-normal mt-10">our <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">AI Video Generator</span> empowers countless satisfied users with effortless video creation.
                        </div>
                        <div className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text text-[29.33px] font-normal leading-[33.33px]">Join them today!</div>
                    </div>
                    <div className="w-2/3 flex gap-8">
                        <div className="border border-[#444040] bg-[#2f3131] rounded-2xl w-full p-10">
                            <div className="text-white text-[53.33px] leading-[53.33px]">1M</div>
                            <div className="text-white/80 text-[18px] mt-10 leading-[21.33px]">Customers</div>
                            <div className="text-white/80 text-[24px] font-bold mt-2">190 Countries</div>
                        </div>
                        <div className="border border-[#444040] bg-[#2f3131] rounded-2xl w-full p-10">
                            <div className="text-white text-[53.33px] leading-[53.33px]">Top 10</div>
                            <div>
                                <img src="/image/icon/yellow-star-group.png" className="mt-10" alt="" />
                                <img src="/image/icon/google.png" className="mt-2" alt="" />
                            </div>
                        </div>
                        <div className="border border-[#444040] bg-[#2f3131] rounded-2xl w-full p-10">
                            <div className="text-white text-[53.33px] leading-[53.33px]">4.9</div>
                            <div>
                                <img src="/image/icon/red-star-group.png" className="mt-10" alt="" />
                                <img src="/image/icon/youtube.png" className="mt-2" alt="" />
                            </div>
                        </div>
                        <div className="border border-[#444040] bg-[#2f3131] rounded-2xl w-full p-10">
                            <div className="text-white text-[53.33px] leading-[53.33px]">4.7</div>
                            <div>
                                <img src="/image/icon/sky-star-group.png" className="mt-10" alt="" />
                                <img src="/image/icon/tiktok.png" className="mt-2" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-30">
                    <div className="text-white text-[64px] leading-[72px] text-center font-bold mt-10">Create Viral cleap in <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">3 Step</span></div>
                    <div className="mt-30 flex gap-15">
                        <div className="bg-[#292d2f] flex flex-col gap-4 rounded-[30px] p-15">
                            <div className="text-white/80 text-[20px] leading-[20px] pl-8">S T E P</div>
                            <div className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text text-[150px] font-bold leading-[150px]">01</div>
                            <div className="text-white text-[34px] leading-[34px] font-bold">Write and outline</div>
                            <div className="text-white/80 text-[20px] leading-[34px] mb-6">
                                Start with writing script using a prompt or using template suggestions. Start with writing script using a prompt or using template suggestions.
                            </div>
                            <div><img src="/image/home/wireframe.png" alt="" /></div>
                        </div>
                        <div className="bg-[#292d2f] flex flex-col gap-4 rounded-[30px] p-15">
                            <div className="text-white/80 text-[20px] leading-[20px] pl-8">S T E P</div>
                            <div className="font-bold bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text text-[150px] leading-[150px]">02</div>
                            <div className="text-white text-[34px] leading-[34px] font-bold">Write and outline</div>
                            <div className="text-white/80 text-[20px] leading-[34px] mb-6">
                                Start with writing script using a prompt or using template suggestions. Start with writing script using a prompt or using template suggestions.
                            </div>
                            <div><img src="/image/home/wireframe.png" alt="" /></div>
                        </div>
                        <div className="bg-[#292d2f] flex flex-col gap-4 rounded-[30px] p-15">
                            <div className="text-white/80 text-[20px] leading-[20px] pl-8">S T E P</div>
                            <div className="font-bold bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text text-[150px] leading-[150px]">03</div>
                            <div className="text-white text-[34px] leading-[34px] font-bold">Write and outline</div>
                            <div className="text-white/80 text-[20px] leading-[34px] mb-6">
                                Start with writing script using a prompt or using template suggestions. Start with writing script using a prompt or using template suggestions.
                            </div>
                            <div><img src="/image/home/wireframe.png" alt="" /></div>
                        </div>
                    </div>
                </section>
                <section className="mt-40">
                    <div className="text-white text-[64px] leading-[72px] text-center font-bold mt-10">Completely <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">Ai Powered</span></div>
                    <div className="text-white text-[64px] leading-[72px] text-center font-bold">Video Generator</div>
                    <div className="mt-20 bg-[#5d5f5f] rounded-2xl p-5">
                        <img src="/image/home/ai-powered.png" alt="" />
                    </div>
                </section>
                <section className="mt-40">
                    <div className="text-white text-[64px] leading-[72px] text-center font-bold mt-10">Create <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">AI Viral </span>Videos</div>
                    <div className="flex justify-center items-center mt-10 text-white/60 text-center text-[21.33px] leading-[33.33px] mx-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry's standard dummy text ever since th.</div>
                </section>
            </div>
        </Layout>
    )
}

export default Home;    