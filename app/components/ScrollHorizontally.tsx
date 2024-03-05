import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStorybook } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { Skills } from "../constants/SkillsData";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../constants/ProjectsData";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SkillCardBlock from "./SkillCardBlock";
import useMediaQuery from "../hooks/MediaQuery";
import {
	animatingBounce,
	whileInviewBounce,
} from "../constants/FramerAnimations";
import {
	AboutAdditional,
	AboutDescription,
	Designation,
	DeveloperName,
} from "../constants";

gsap.registerPlugin(ScrollTrigger);

function ScrollHorizontally() {
	const scroller = useRef(null);
	const skills = useRef(null);
	const isMobile = useMediaQuery("(max-width: 899px)");

	useEffect(() => {
		let skillSet = gsap.utils.toArray(".skill-set");
		let to = gsap.to(skillSet, {
			xPercent: () => -100 * (skillSet.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: scroller.current,
				markers: false,
				pin: true,
				pinSpacing: true,
				scrub: 1,
				invalidateOnRefresh: true,
				anticipatePin: 1,
				snap: 1 / (skillSet.length - 1),

				end: () => "+=" + window.innerWidth,
			},
		});

		return () => {
			to.kill();
		};
	}, []);

	return (
		<>
			{isMobile ? (
				<div className="flex flex-col gap-12">
					<motion.section className="" {...animatingBounce}>
						<motion.div className="text-center bg-primary p-12 text-gray-900 w-full grid place-items-center">
							<div>
								<h1 className="text-[4rem] xs:text-[8rem] md:text-[12rem]">
									{DeveloperName}
								</h1>
								<h2 className="text-4xl md:text-8xl">{Designation}</h2>
							</div>
							<motion.div className="grid grid-cols-4 place-items-center sm:flex gap-2 sm:gap-8 py-4">
								<FaHtml5 className="w-8 h-8 md:w-10 md:h-10" />
								<FaCss3 className="w-8 h-8 md:w-10 md:h-10" />
								<IoLogoJavascript className="w-8 h-8 md:w-10 md:h-10" />
								<FaReact className="w-8 h-8 md:w-10 md:h-10" />
								<TbBrandNextjs className="w-8 h-8 md:w-10 md:h-10" />
								<SiStorybook className="w-8 h-8 md:w-10 md:h-10" />
								<FaNodeJs className="w-8 h-8 md:w-10 md:h-10" />
								<DiMongodb className="w-8 h-8 md:w-10 md:h-10" />
								<SiExpress className="w-8 h-8 md:w-10 md:h-10" />
								<BsFiletypeJson className="w-8 h-8 md:w-10 md:h-10" />
								<FaFigma className="w-8 h-8 md:w-10 md:h-10" />
							</motion.div>
						</motion.div>
					</motion.section>
					<motion.section {...whileInviewBounce} className="grid gap-2">
						<div className="text-center bg-primary p-6 text-gray-900 w-full grid place-items-center">
							<h2 className="text-4xl sm:text-8xl text-center w-full">
								About Me
							</h2>
							<div className="grid gap-4">
								<div className="text-2xl rounded-lg p-7">
									<motion.p
										initial={{
											opacity: 0,
											y: 10,
										}}
										whileInView={{
											opacity: 1,
											y: 0,
										}}
										viewport={{
											once: true,
											amount: 1,
										}}
										transition={{
											duration: 0.5,
											delay: 0.6,
										}}>
										{AboutDescription}
									</motion.p>
									<br />

									<motion.p
										initial={{
											opacity: 0,
											y: 10,
										}}
										whileInView={{
											opacity: 1,
											y: 0,
										}}
										viewport={{
											once: true,
											amount: 1,
										}}
										transition={{
											duration: 0.5,
											delay: 0.7,
										}}>
										{AboutAdditional}
									</motion.p>
									<br />
								</div>

								<motion.div
									initial={{
										opacity: 0,
										y: 10,
									}}
									whileInView={{
										opacity: 1,
										y: 0,
									}}
									viewport={{
										once: true,
										amount: 1,
									}}
									transition={{
										duration: 0.5,
										delay: 0.8,
									}}
									className="border-white relative grid place-items-center">
									<Image
										src="/profilepic.jpeg"
										height={300}
										width={300}
										alt="Image of a short asian man standing beside bart simpson"
										quality={100}
										style={{ objectFit: "cover" }}
										className="rounded-full"
									/>
								</motion.div>
							</div>
						</div>
					</motion.section>
					<motion.section {...whileInviewBounce}>
						<div className="text-center bg-primary p-6 text-gray-900 w-full md:w-[80%] grid place-items-center">
							<motion.div
								initial={{
									opacity: 0,
									y: 10,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{
									once: true,
									amount: 1,
								}}
								transition={{
									duration: 0.5,
									delay: 0.1,
								}}
								className="text-4xl sm:text-8xl text-center w-full py-6">
								Contact Me
							</motion.div>

							<div className="grid gap-6 py-6 place-items-center">
								<div className="">
									<motion.div
										initial={{
											opacity: 0,
											y: 10,
										}}
										whileInView={{
											opacity: 1,
											y: 0,
										}}
										viewport={{
											once: true,
											amount: 1,
										}}
										transition={{
											duration: 1,
											delay: 0.3,
											type: "spring",
										}}
										className="font-bold text-2xl sm:text-6xl text-center">
										Let&apos;s talk
									</motion.div>
									<motion.div
										initial={{
											opacity: 0,
											y: 10,
										}}
										whileInView={{
											opacity: 1,
											y: 0,
										}}
										viewport={{
											once: true,
											amount: 1,
										}}
										transition={{
											duration: 1,
											delay: 0.5,
											type: "spring",
										}}
										className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] text-[1rem] font-bold hover:cursor-pointer">
										<div>
											<IoIosMail className="w-8 h-8 sm:w-10 sm:h-10" />
										</div>
										<Link
											href={"mailto:jsreactdevsai@gmail.com"}
											className="text-xl sm:text-2xl">
											Email Me
										</Link>
									</motion.div>
								</div>
								<div className="grid">
									<motion.div
										initial={{
											opacity: 0,
											y: 10,
										}}
										whileInView={{
											opacity: 1,
											y: 0,
										}}
										viewport={{
											once: true,
											amount: 1,
										}}
										transition={{
											duration: 1,
											delay: 0.3,
											type: "spring",
										}}
										className="font-bold text-2xl sm:text-6xl py-2 text-center">
										Socials
									</motion.div>
									<div className=" ">
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{
												once: true,
												amount: 1,
											}}
											transition={{
												duration: 1,
												delay: 0.8,
												type: "spring",
											}}>
											<Link
												target="_blank"
												href={"https://github.com/sain-fullstack-developer"}>
												<div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-4 rounded-[8px] text-[1rem] font-bold">
													<div>
														<FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
													</div>
													<div className="text-xl sm:text-2xl">
														@sainfullstackdeveloper
													</div>
												</div>
											</Link>
										</motion.div>
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{
												once: true,
												amount: 1,
											}}
											transition={{
												duration: 1,
												delay: 0.8,
												type: "spring",
											}}>
											<Link target="_blank" href={"https://pin.it/5jm4lqpYq"}>
												<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
													<div>
														<FaPinterest className="w-8 h-8 sm:w-10 sm:h-10" />
													</div>
													<div className="text-xl sm:text-2xl">
														@sainath_pinterest
													</div>
												</div>
											</Link>
										</motion.div>
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{
												once: true,
												amount: 1,
											}}
											transition={{
												duration: 1,
												delay: 0.8,
												type: "spring",
											}}>
											<Link target="_blank" href={"https://qr.ae/pKE9KV"}>
												<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
													<div>
														<FaQuora className="w-8 h-8 sm:w-10 sm:h-10" />
													</div>
													<div className="text-xl sm:text-2xl">
														@sainath_Quora
													</div>
												</div>
											</Link>
										</motion.div>
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{
												once: true,
												amount: 1,
											}}
											transition={{
												duration: 1,
												delay: 0.8,
												type: "spring",
											}}>
											<Link target="_blank" href={"https://instagram.com"}>
												<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
													<div>
														<FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
													</div>
													<div className="text-xl sm:text-2xl">@sainath</div>
												</div>
											</Link>
										</motion.div>
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{
												once: true,
												amount: 1,
											}}
											transition={{
												duration: 1,
												delay: 0.7,
												type: "spring",
											}}>
											<Link
												target="_blank"
												href={"https://www.linkedin.com/in/sainath-reactjs/"}>
												<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
													<div>
														<FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
													</div>
													<div className="text-xl sm:text-2xl">Sainath K</div>
												</div>
											</Link>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</motion.section>
					<motion.section {...whileInviewBounce}>
						<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[90%] grid place-items-center">
							<h1 className="text-6xl sm:text-8xl text-center py-6">
								Technical Skills
							</h1>
							<div className="grid gap-12 place-items-center">
								{Skills.map((skill, index) => {
									return (
										<div className="flex flex-col" key={index}>
											<h2 className="text-5xl font-bold tracking-wider py-4 text-center">
												{skill.title}
											</h2>
											<div className="text-4xl grid gap-4">
												{skill.skills.map((list, i) => {
													return (
														<div key={i} className="flex gap-2">
															<SkillCardBlock
																name={list.name}
																icon={list.icon}
															/>
														</div>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</motion.section>
					<motion.section {...whileInviewBounce}>
						<div className="text-center bg-primary p-6 text-gray-900 w-full grid place-items-center">
							<h1 className="text-4xl text-center py-6 font-bold">Projects</h1>
						</div>
					</motion.section>
					{projectsData.map((project, index) => {
						return (
							<motion.section key={index}>
								<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[90%] md:h-[90%]">
									<h1 className="text-4xl font-bold text-center">{`Project-${
										index + 1
									}`}</h1>
									<ProjectCard
										title={project?.title}
										description={project?.description}
										imageSrc={project?.projectImage}
										liveLink={project?.links}
										features={project?.features}
									/>
								</div>
							</motion.section>
						);
					})}
				</div>
			) : (
				<div className="overflow-hidden flex">
					<div className="overflow-hidden p-0">
						<div
							id="skills"
							ref={scroller}
							className="flex overflow-x-hidden overflow-y-scroll text-white md:w-[1200vw] m-0 bg-[#ab8b74] relative !max-h-none  md:!max-h-[679px] md:!h-screen">
							<motion.section
								ref={skills}
								className="skill-set lg:px-32 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50">
								<motion.div
									initial={{ y: -400 }}
									animate={{ y: 0 }}
									transition={{ duration: 2 }}
									className="text-center sm:text-left bg-primary p-12 text-gray-900 w-full grid place-items-center">
									<div>
										<h1 className="text-[4rem] xs:text-[8rem] md:text-[12rem]">
											{DeveloperName}
										</h1>
										<h2 className="text-4xl md:text-8xl">{Designation}</h2>
									</div>
									<motion.div className="grid grid-cols-4 place-items-center sm:flex gap-2 sm:gap-8 py-4">
										<FaHtml5 className="w-8 h-8 md:w-10 md:h-10" />
										<FaCss3 className="w-8 h-8 md:w-10 md:h-10" />
										<IoLogoJavascript className="w-8 h-8 md:w-10 md:h-10" />
										<FaReact className="w-8 h-8 md:w-10 md:h-10" />
										<TbBrandNextjs className="w-8 h-8 md:w-10 md:h-10" />
										<SiStorybook className="w-8 h-8 md:w-10 md:h-10" />
										<FaNodeJs className="w-8 h-8 md:w-10 md:h-10" />
										<DiMongodb className="w-8 h-8 md:w-10 md:h-10" />
										<SiExpress className="w-8 h-8 md:w-10 md:h-10" />
										<BsFiletypeJson className="w-8 h-8 md:w-10 md:h-10" />
										<FaFigma className="w-8 h-8 md:w-10 md:h-10" />
									</motion.div>
								</motion.div>
							</motion.section>
							<section
								ref={skills}
								className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex justify-center items-center z-50">
								<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[90%] grid place-items-center">
									<h2 className="text-4xl sm:text-8xl text-center w-full">
										About Me
									</h2>
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="text-2xl rounded-lg p-7">
											<motion.p
												initial={{
													opacity: 0,
													y: 10,
												}}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{
													once: true,
													amount: 1,
												}}
												transition={{
													duration: 0.5,
													delay: 0.6,
												}}>
												{AboutDescription}
											</motion.p>
											<br />

											<motion.p
												initial={{
													opacity: 0,
													y: 10,
												}}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{
													once: true,
													amount: 1,
												}}
												transition={{
													duration: 0.5,
													delay: 0.7,
												}}>
												{AboutAdditional}
											</motion.p>
											<br />
										</div>

										<motion.div
											initial={{
												opacity: 0,
												y: 10,
											}}
											whileInView={{
												opacity: 1,
												y: 0,
											}}
											viewport={{
												once: true,
												amount: 1,
											}}
											transition={{
												duration: 0.5,
												delay: 0.8,
											}}
											className="border-white relative grid place-items-center">
											<Image
												src="/profilepic.jpeg"
												height={300}
												width={300}
												alt="Image of a short asian man standing beside bart simpson"
												quality={100}
												style={{ objectFit: "cover" }}
												className="rounded-full"
											/>
										</motion.div>
									</div>
								</div>
							</section>
							<section
								ref={skills}
								className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex justify-center items-center z-50">
								<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[80%] grid place-items-center">
									<motion.div
										initial={{
											opacity: 0,
											y: 10,
										}}
										whileInView={{
											opacity: 1,
											y: 0,
										}}
										viewport={{
											once: true,
											amount: 1,
										}}
										transition={{
											duration: 0.5,
											delay: 0.1,
										}}
										className="text-4xl sm:text-8xl text-center w-full py-6">
										Contact Me
									</motion.div>

									<div className="grid sm:grid-cols-2 gap-6 py-6 place-items-center">
										<div className="">
											<motion.div
												initial={{
													opacity: 0,
													y: 10,
												}}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{
													once: true,
													amount: 1,
												}}
												transition={{
													duration: 1,
													delay: 0.3,
													type: "spring",
												}}
												className="font-bold text-2xl sm:text-6xl text-center">
												Let&apos;s talk
											</motion.div>
											<motion.div
												initial={{
													opacity: 0,
													y: 10,
												}}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{
													once: true,
													amount: 1,
												}}
												transition={{
													duration: 1,
													delay: 0.5,
													type: "spring",
												}}
												className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] text-[1rem] font-bold hover:cursor-pointer">
												<div>
													<IoIosMail className="w-8 h-8 sm:w-10 sm:h-10" />
												</div>
												<Link
													href={"mailto:jsreactdevsai@gmail.com"}
													className="text-xl sm:text-2xl">
													Email Me
												</Link>
											</motion.div>
										</div>
										<div className="grid">
											<motion.div
												initial={{
													opacity: 0,
													y: 10,
												}}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{
													once: true,
													amount: 1,
												}}
												transition={{
													duration: 1,
													delay: 0.3,
													type: "spring",
												}}
												className="font-bold text-2xl sm:text-6xl py-2 text-center">
												Socials
											</motion.div>
											<div className=" ">
												<motion.div
													initial={{
														opacity: 0,
														y: 10,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{
														once: true,
														amount: 1,
													}}
													transition={{
														duration: 1,
														delay: 0.8,
														type: "spring",
													}}>
													<Link
														target="_blank"
														href={
															"https://github.com/sain-fullstack-developer"
														}>
														<div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-4 rounded-[8px] text-[1rem] font-bold">
															<div>
																<FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
															</div>
															<div className="text-xl sm:text-2xl">
																@sainfullstackdeveloper
															</div>
														</div>
													</Link>
												</motion.div>
												<motion.div
													initial={{
														opacity: 0,
														y: 10,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{
														once: true,
														amount: 1,
													}}
													transition={{
														duration: 1,
														delay: 0.8,
														type: "spring",
													}}>
													<Link
														target="_blank"
														href={"https://pin.it/5jm4lqpYq"}>
														<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
															<div>
																<FaPinterest className="w-8 h-8 sm:w-10 sm:h-10" />
															</div>
															<div className="text-xl sm:text-2xl">
																@sainath_pinterest
															</div>
														</div>
													</Link>
												</motion.div>
												<motion.div
													initial={{
														opacity: 0,
														y: 10,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{
														once: true,
														amount: 1,
													}}
													transition={{
														duration: 1,
														delay: 0.8,
														type: "spring",
													}}>
													<Link target="_blank" href={"https://qr.ae/pKE9KV"}>
														<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
															<div>
																<FaQuora className="w-8 h-8 sm:w-10 sm:h-10" />
															</div>
															<div className="text-xl sm:text-2xl">
																@sainath_Quora
															</div>
														</div>
													</Link>
												</motion.div>
												<motion.div
													initial={{
														opacity: 0,
														y: 10,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{
														once: true,
														amount: 1,
													}}
													transition={{
														duration: 1,
														delay: 0.8,
														type: "spring",
													}}>
													<Link target="_blank" href={"https://instagram.com"}>
														<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
															<div>
																<FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
															</div>
															<div className="text-xl sm:text-2xl">
																@sainath
															</div>
														</div>
													</Link>
												</motion.div>
												<motion.div
													initial={{
														opacity: 0,
														y: 10,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{
														once: true,
														amount: 1,
													}}
													transition={{
														duration: 1,
														delay: 0.7,
														type: "spring",
													}}>
													<Link
														target="_blank"
														href={
															"https://www.linkedin.com/in/sainath-reactjs/"
														}>
														<div className="gap-3 flex flex-row items-center justify-center px-[1rem] py-2 rounded-[8px] text-[1rem] font-bold">
															<div>
																<FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
															</div>
															<div className="text-xl sm:text-2xl">
																Sainath K
															</div>
														</div>
													</Link>
												</motion.div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section
								ref={skills}
								className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex justify-center items-center z-50">
								<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[90%] grid place-items-center">
									<h1 className="text-6xl sm:text-8xl text-center py-6">
										Technical Skills
									</h1>
									<div className="grid sm:grid-cols-3 lg:flex gap-12 justify-center">
										{Skills.map((skill, index) => {
											return (
												<div className="flex flex-col" key={index}>
													<h2 className="text-3xl font-bold tracking-wider py-2 text-center">
														{skill.title}
													</h2>
													<div className="text-xl">
														{skill.skills.map((list, i) => {
															return (
																<div key={i} className="flex gap-2">
																	<SkillCardBlock
																		name={list.name}
																		icon={list.icon}
																	/>
																</div>
															);
														})}
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</section>
							<section
								ref={skills}
								className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex justify-center items-center z-50">
								<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[60%] grid place-items-center">
									<h1 className="text-4xl md:text-8xl text-center py-6">
										Projects
									</h1>
								</div>
							</section>
							{projectsData.map((project, index) => {
								return (
									<section
										key={index}
										ref={skills}
										className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex justify-center items-center z-50">
										<div className="text-center sm:text-left bg-primary p-6 text-gray-900 w-full md:w-[90%] md:h-fit">
											<h1 className="text-4xl md:text-8xl text-center">{`Project-${
												index + 1
											}`}</h1>
											<ProjectCard
												title={project?.title}
												description={project?.description}
												imageSrc={project?.projectImage}
												liveLink={project?.links}
												features={project?.features}
											/>
										</div>
									</section>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ScrollHorizontally;
