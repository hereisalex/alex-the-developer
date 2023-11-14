import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  link: string
  slug?: string
}

export const ProjectCoverImage = ({ title, src, slug, link }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('rounded-3xl shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={link}>
        {image}
      </Link>
      ) : (
        image
      )}
    </div>
  )
}


export default ProjectCoverImage
