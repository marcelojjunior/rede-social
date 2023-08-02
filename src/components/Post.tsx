import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { ChangeEvent, FormEvent, InvalidEvent, useState,  } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps){
  const [comments, setComments] = useState([
    'Post muito bacana!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const prublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className="bg-gray-300 rounded-lg p-7">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar 
            src={author.avatarUrl}
          />
          <div className="flex flex-col">
            <strong className="text-gray-700">
                {author.name}
            </strong>
            <span className="text-gray-500 text-sm">
                {author.role}
            </span>
          </div>
        </div>
        <time 
            className="text-gray-500 text-sm"
            dateTime={publishedAt.toISOString()} 
            title={publishedDateFormatted} 
        >
          {prublishedDateRelativeToNow}
        </time>
      </header>

      <div className="text-gray-700 mt-6 flex flex-col gap-4">
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if(line.type === 'link') {
            return <a key={line.content} className="font-bold text-blue-100 hover:text-blue-300" href={line.content}>{line.content}</a>
          }
        })}
      </div>

      <form 
        onSubmit={handleCreateNewComment}
        className="w-full mt-6 pt-6 border-t border-solid border-gray-200 flex flex-col items-start"
      >
        <strong className="text-gray-700 ">
            Deixe um comentário
        </strong>
        <textarea
            onChange={handleNewCommentChange}
            name='comment'
            value={newCommentText}
            className="w-full h-24 bg-gray-200 border-0 resize-none text-gray-600 rounded-lg p-4 mt-4"
            placeholder="Deixe um comentário..."
            onInvalid={handleNewCommentInvalid}
            required
        />
        <button
            className="py-4 px-6 mt-4 rounded-lg bg-blue-100 text-white font-bold hover:bg-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isNewCommentEmpty}
        >
            Comentar
        </button>
      </form>

      <div className="mt-8">
        {comments.map(comment => {
          return (
            <Comment
              onDeleteComment={deleteComment} 
              key={comment}    
              content={comment}
            />
          )
        })}
      </div>
    </article>
  );
}
