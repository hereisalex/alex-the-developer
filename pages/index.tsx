import Container from '../components/container'
import MoreStories from '../components/moreStories'
import HeroPost from '../components/heroPost'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Dashboard from '../components/dashboard'
import Projects from '../components/projects'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Alex McKenzie | Fullstack Developer</title>
        </Head>
        <Container>
          <Intro />
          <div className='max-w-7xl mx-auto'>

          <Dashboard />
          {heroPost && (
            <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            />
            )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <Projects />
            </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
