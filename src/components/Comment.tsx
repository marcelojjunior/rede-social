import { ThumbsUp, Trash } from "phosphor-react";
import imageProfile from "../assets/images/marcelojunior.jpeg";
import { Avatar } from "./Avatar";
import { useState } from "react";


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className="mt-6 flex gap-4">
            <Avatar
                hasBorder={false}
                src={imageProfile}
                alt=""
            />
            <div 
                className="flex-1"
            >
                <div className="bg-gray-800 p-4 rounded-lg">
                    <header className="flex items-start justify-between">
                        <div className="flex flex-col">
                            <strong
                                className="text-gray-700"
                            >
                                John Doe
                            </strong>
                            <time
                                className="text-sm text-gray-500"
                                title="02 de Junho de 2022"
                                dateTime="2022-06-02 08:13:00"
                            >
                                há 1h
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            className="text-gray-500 rounded hover:text-red-danger"
                            title="Deletar comentário"
                        >
                            <Trash size={20} />
                        </button>
                    </header>
                    <p
                        className="text-gray-700 mt-4"
                    >
                        {content}
                    </p>
                </div>
                <footer className="mt-4">
                    <button 
                        onClick={handleLikeComment}
                        className="text-gray-500 flex items-center hover:text-blue-100 rounded"
                    >
                        <ThumbsUp size={20} className="mr-2" />
                        Curtir<span>&nbsp;- {likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}