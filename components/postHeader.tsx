import Avatar from './avatar'
import DateFormatter from './dateFormatter'
import CoverImage from './coverImage'
import PostTitle from './postTitle'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-1 slide-in-bottom-nodelay">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 slide-in-bottom-nodelay">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto slide-in-bottom-nodelay">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
