/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio() {
	return (
		<StaticQuery
			query={bioQuery}
			render={data => {
				const {
					author,
					social: { github }
				} = data.site.siteMetadata;
				return (
					<div
						style={{
							display: `flex`,
							marginBottom: rhythm(2.5)
						}}
					>
						<Image
							fixed={data.avatar.childImageSharp.fixed}
							alt={author}
							style={{
								marginRight: rhythm(1 / 2),
								marginBottom: 0,
								minWidth: 50,
								borderRadius: `100%`
							}}
							imgStyle={{
								borderRadius: `50%`
							}}
						/>
						<div>
							<p>
								I'm a web developer and suicide crisis line
								volunteer who lives in Portland Oregon, and also
								I eat a lot of pasta. My pronouns are he/him.
								<br />
								<a href={github}>
									Here's my Github profile.
								</a>{' '}
								<a href="https://vcolavin.wordpress.com">
									Here's my archived blog.
								</a>
							</p>
						</div>
					</div>
				);
			}}
		/>
	);
}

const bioQuery = graphql`
	query BioQuery {
		avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
			childImageSharp {
				fixed(width: 50, height: 50) {
					...GatsbyImageSharpFixed
				}
			}
		}
		site {
			siteMetadata {
				author
				social {
					github
				}
			}
		}
	}
`;

export default Bio;
