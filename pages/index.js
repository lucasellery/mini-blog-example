import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import Footer from '../components/Footer'

const Subtitle = styled.h2`
  background-color: var(--primary);
  color: #FFFFFF;
  display: inline-block;
  padding: 5px;
  border-radius: 8px;
`;

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <Link href="/sobre">
          <a>
            <h1>Luke's blog</h1>
          </a>
        </Link>
      </header>

      <section className="postsContainer">
        <Subtitle>Posts</Subtitle>
        <article className="postsContainer_post">
          <a href="/">
            Alura.js 01
          </a>
          <p>
            O que eu aprendi com o CDFTV + dev.soutinho
          </p>
        </article>
      </section>

      <section className="postsContainer">
        <Subtitle>Repositórios favoritos</Subtitle>
          {
            props?.repos?.map((project) => {
              return (
                <article
                  key={project.repo}
                  className="postsContainer_post"
                >
                  <a href="/">
                    {project.repo}
                  </a>
                  <p>
                    {project.description}
                  </p>
                </article>  
              )
            })
          }
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps () {
  const githubResponse = await fetch('https://api.github.com/users/lucasellery')
    .then(res => res.json())

  const repos = await fetch('https://gh-pinned-repos.egoist.sh/?username=lucasellery')
    .then(res => res.json())

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos,
    }
  }
}