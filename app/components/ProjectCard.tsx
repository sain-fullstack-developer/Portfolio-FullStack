import Image from "next/image";
import Link from "next/link";
import React from "react";

type projectCardTypes = {
	title: string;
	description: string;
	imageSrc: string;
	liveLink: string;
	features: string[];
};

const ProjectCard = (props: projectCardTypes) => {
	const { title, description, imageSrc, liveLink, features } = props;
	return (
		<div className="grid md:grid-cols-2 gap-4 py-4">
			<div className=" text-gray-900 p-6 order-2 md:order-1 grid place-items-center md:place-items-start">
				<h3 className="text-4xl">
					<b>Project Title: </b>
				</h3>
				<p className="py-2 text-xl sm:text-2xl">{title}</p>
				<h3 className="text-4xl py-2">
					<b>Project Description: </b>
				</h3>
				<p className="py-2 text-xl">{description}</p>
				{features && features.length > 0 && (
					<>
						<h3 className="text-4xl py-2">
							<b>Features: </b>
						</h3>
						<ul className="list-disc">
							{features.slice(0, 4).map((feature, index) => {
								return (
									<li key={index} className="py-2 text-xl">
										{feature}
									</li>
								);
							})}
						</ul>
					</>
				)}
			</div>
			<div className="relative py-6 order-1 md:order-2 grid place-items-center md:place-items-start">
				<Image
					src={imageSrc}
					height={400}
					width={400}
					alt="project-reference"
					className="rounded-xl"
				/>
				<h3 className="text-4xl py-2">
					<b>Project Live Link: </b>
				</h3>
				<p className="py-2 text-lg">
					<Link href={liveLink}>{liveLink}</Link>
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
