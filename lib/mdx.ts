import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { format, parseISO } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';

const dataFolderPath = path.resolve(process.cwd(), 'mdx');

type GetFileContentResult<T> = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontmatter: T & {
    readingTime: string;
  } & (
      | {
          publishedAt?: never;
          publishedAtISO?: never;
        }
      | {
          publishedAt: string;
          publishedAtISO: string;
        }
    );
};

/**
 * Read file from data folder and transform
 *
 * @param filepath relative path from data folder
 * @returns frontmatter data and transformed mdx to string
 */
export async function getFileContent<T>(
  filepath: string,
): Promise<GetFileContentResult<T>> {
  const source = fs.readFileSync(path.resolve(dataFolderPath, filepath), 'utf-8');
  const { data, content } = matter(source);

  const result = {
    frontmatter: {
      ...data,
      readingTime: `${readingTime(content).text}`,
    },
    source: await transformMDX(content),
  } as GetFileContentResult<T>;

  if (typeof result.frontmatter.publishedAt === 'string') {
    Object.assign(result.frontmatter, {
      publishedAt: format(parseISO(result.frontmatter.publishedAt), 'MMMM d, yyyy'),
      publishedAtISO: result.frontmatter.publishedAt,
    });
  }

  return result;
}

async function transformMDX(content: string) {
  return await serialize(content);
}
