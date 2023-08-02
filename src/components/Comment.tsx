import { ThumbsUp, Trash } from "phosphor-react";
import imageProfile from "../assets/images/marcelojunior.jpeg";
import { Avatar } from "./Avatar";
import { useState } from "react";


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(3);
    const [isLiked, setIsLiked] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            if (isLiked) {
                setIsLiked(false);
                return state - 1;
            } else {
                setIsLiked(true);
                return state + 1;
            }
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
                            // onClick={handleDeleteComment}
                            onClick={() => setOpenModalDelete(true)}
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
                        onFocus={(e) => e.target.blur()}
                        className={`flex items-center hover:text-blue-100 rounded ${isLiked ? 'text-blue-100' : 'text-gray-500'}`}
                    >
                        <ThumbsUp size={20} className="mr-2" />
                        Curtir<span>&nbsp;- {likeCount}</span>
                    </button>
                </footer>
            </div>

            <div
                className={`${openModalDelete ? 'block' : 'hidden'} bg-gray-800 bg-opacity-50 backdrop-blur z-40 fixed w-full left-0 top-0 h-screen flex justify-center items-center`}
            >
                <div className="bg-gray-300 w-max rounded-lg p-6 flex flex-col gap-6 justify-center items-center">
                    <h1 className="font-bold text-2xl text-gray-700">
                        Excluir comentário
                    </h1>
                    <p className="text-gray-700 text-base">
                        Você tem certeza que deseja excluir esse comentário?
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setOpenModalDelete(false)}
                            className="text-gray-700 hover:opacity-90 rounded-lg"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleDeleteComment}
                            className="text-red-danger bg-gray-800 py-2 px-6 rounded-lg hover:opacity-90"
                        >
                            Sim, excluir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}