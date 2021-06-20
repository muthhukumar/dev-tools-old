import * as React from 'react'

import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { snippetFilePaths, SNIPPETS_PATH } from '../utils/files'
import type { GetStaticProps } from 'next'

type Props = {
  posts: Array<{
    content: string
    data: {
      [key: string]: any
    }
    filePath: string
  }>
}

const Snippets: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Click the link below to navigate to a page generated by <code>next-mdx-remote</code>.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/posts/[slug]`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts = snippetFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(SNIPPETS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

export default Snippets