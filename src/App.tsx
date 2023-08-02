import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";
import "./css/main.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/john-smilga.png',
      name: 'John Smilga',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2023-06-01 08:13:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Opa meu povo 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-02 08:13:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/kauan777.png',
      name: 'Kauan Costa',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Eae pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-03 09:13:00'),
  }  
]

export function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="max-w-6xl my-8 mx-auto px-4 grid grid-cols-256px-1fr gap-8 items-start">
        <Sidebar />
        <main className="gap-8 flex flex-col">
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
