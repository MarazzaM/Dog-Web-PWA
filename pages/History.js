import styles from "../styles/History.module.scss";

export default function History() {
  return (
    <div>
      <h1 className={styles.title}>
        <span className="primary">H</span>
        <span className="secondary">I</span>
        <span className="tertiary">S</span>
        <span className="primary">T</span>
        <span className="secondary">O</span>
        <span className="tertiary">R</span>
        <span className="primary">Y</span>
      </h1>
      <div className={styles.text}>
        <h1>Short history of The human-dog relationship</h1>
        <p>
          <span className="primary">There</span> is archaeological evidence dogs were the first animals
          domesticated by humans more than 30,000 years ago (more than 10,000
          years before the domestication of horses and ruminants). This started
          when wolves began scavenging food scraps from humans, who then began
          to domesticate the wolves providing them with shelter and protection.
          In return, the wolves helped the human hunter-gatherers with hunting.
          As these domesticated wolves were breeding, over 1,000s of years they
          became dogs as we know them today.
        </p>

        <p>
        <span className="primary">Alongside</span> evolution of the wolf’s physiology, there is evidence of the
          developing bond between humans and what we now call dogs. At a burial
          site in Predmosti (Czech Republic) a dog was discovered buried with a
          bone (believed to be from a mammoth) carefully placed in his mouth
          after death – it is believed to be 32,000 years old. In Ober-Kassel
          (Germany) the skeleton of a disabled dog was buried with the bodies of
          a man and of a woman; radiocarbon dating puts this at about 14,300
          years ago. This is a unique early example of the developing
          connection; beyond uisng dogs for practical purposes only.
        </p>

        <p>
        <span className="primary">Other</span> early dog burial sites were discovered in many other places; the
          mummified Black dog of Tumat in Russia is thought to be 12,450 years
          old, and in Israel at the Ain Mallaha Natufian settlement there are 12
          individuals buried, one with their hand resting on the body of a small
          puppy (dating back at least 12,000 years).
        </p>

        <p>
        <span className="primary">From</span> at least 6,000 years ago dogs were deified in many leading
          civilisations (Anubis in Egypt, Xolotl for the Mayas, Cerberus for the
          Greeks). Their role was either to accompany the deceased people to the
          other world (this stresses the guide role of dogs) or to guard the
          other world.
        </p>

        <p>
        <span className="primary">As</span> dogs were evolving alongside humans, they are able to connect with
          us on a deeper level than many animals today.
        </p>
        <h2>Information given by <a className={styles.link} href="https://www.boehringer-ingelheim.com" target="_blank" rel="noopener noreferrer" >Boehringer Ingelheim</a></h2>
      </div>
    </div>
  );
}
