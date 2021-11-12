import styles from '../styles/Home.module.scss'
import Card from '../components/Card'
import Title from '../components/Title'
import Buttons from '../components/Buttons'

export default function Home() {
  const dog =[
    {
      id: "c1",
      image: "collie.webp",
      quote: "They are cute, aren't they?",
      author: " -Me, after seeing any dog-"
    },
    {
      id: "c2",
      image: "puppy.webp",
      quote: "Can we adopt them all?",
      author: " -My partner at the animal shelter-"
    },
    {
      id: "c3",
      image: "puppy1.webp",
      quote: "They need much more food than that.",
      author: " -My grandma always when she sees me feed them-"
    }
  ]
  return (
  <>
    <Title />
    <h2 className={styles.subtitle}>
    <span className="primary">All</span>
                          <span className={styles.letters}>  </span>
    <span className="secondary">about</span>
                          <span className={styles.letters}>  </span>
    <span className="tertiary">dogs</span>
    <span className="exclamation">!</span>
    </h2>
   <div className={styles.container}>
   <Card
      id={dog[0].id}
      image={dog[0].image}
      quote={dog[0].quote}
      author={dog[0].author}
    />
   <Card 
    id={dog[1].id}
    image={dog[1].image}
    quote={dog[1].quote}
    author={dog[1].author}
   />
   <Card 
    id={dog[2].id}
    image={dog[2].image}
    quote={dog[2].quote}
    author={dog[2].author}
   />
   </div>
   <Buttons />
  </>
  )
}
