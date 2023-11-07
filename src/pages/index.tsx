import { styled } from "@/stitches.config"
import Image from "next/image";
import useSWR from "swr";
import { PhotoData } from "./api/photos";
import { braidArrays } from "@/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { GridCellText } from "@/styles";
import CardFlip from "@/components/CardFlip";
import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";

const Page = styled('div', {
  minHeight: "100vh",
  margin: "0",
  boxSizing: 'border-box',
  gridGap: '0',
  display: "grid",
  position: "relative",
  gridTemplateColumns: `1fr 3fr 1fr`,
  gridTemplateRows: "300px 5fr",
  gridTemplateAreas: `
    ". header ."
    ". grid ."
    ". footer ."
  `,
  overflow: 'auto',
});

const Header = styled('header', {
  gridArea: "header",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const InnerHeader = styled('div', {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontSize: "1.5rem",
})

const Grid = styled('div', {
  gap: 25,
  position: "relative",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  gridAutoRows: "300px",
  gridArea: "grid",
  minWidth: "0",
  minHeight: "0",
})

const Footer = styled('footer', {
  width: '100%',
  height: '50px',
  gridArea: "footer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})



const fetcher = (url: string): Promise<PhotoData> => fetch(url).then(res => res.json())

const MESSAGES = [
  {
    text: "Happy Birthday Joyce! I pray this year will be filled with the Lord’s joy, peace and love in all that you do and hope you enjoy your birthday!!",
    from: "Kristina"
  },
  {
    text: "Dear Joyce, happy happy birthday! I hope you have another amazing year full of fun and new adventures.",
    from: "Sofia"
  },
  {
    text: "Joyce!! HAPPY BIRTHDAY! I’m so thankful to have gotten to know you throughout these last few months. You have such a kind heart and I pray that this next year of your life is filled with laughter, growth, and love.",
    from: "Zoe"
  },
  {
    text: "HAPPY BIRTHDAY Joyce! Just wanted to tell you that I noticed new rebar coming in, thus more construction to watch together! Also, gonna need your thought on why the gravel was put down in between the concrete troughs. I cannot figure that one out.",
    from: "Nate"
  },
  {

    text: "Happiest of bdays Joycie!!\nThanks for always being so real and being such a bundle of joy♡ I pray the Lord gives you strength and courage this semester and that you continue to feel the safe peace from Him. You have such a sweet safe presence so continue being a blessing to those around you and may the Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace. (Numbers 6:24-26) ♡ love u joycie !!",
    from: "Shayna"
  },
  {
    text: "HAPPY BIRTHDAY JOYCE!!! I LOVE YOU TO THE MOON AND BACK! Can’t wait for many more years of friendship together :)",
    from: "Grace"
  },
  {
    text: "It has been such a blessing to live at Carey and grow in our friendship throughout the years. You may not realize it, but you have grown so so much since first year in so many beautiful ways. It has been so amazing to see you flourish into the caring person you are today. I could not imagine Carey without you. Your integrity and how you live out your beliefs has been so inspiring to me, and you have pushed me in so many ways throughout the years. Thank you for embracing my craziness, your tight loving hugs, and thoughtful conversations.",
    from: "Sarah pt.1"
  },
  {
    text: "My prayer for you in this next year is for you to embrace the life God has in store for you. I pray that this year will be marked by a peace beyond your understanding, that you will continue to pursue Him and trust in His amazing will and let Him use the gifts and passions He has given you to do His good.",
    from: "Sarah pt.2"
  },
  {
    text: "I pray that you will get out of your head and live in the present moment that God is blessing you with. That you will address your anxieties and give them over to God so you can instead be filled with thankfulness for the little things in life, the daily moments. I know God is a healer and that He desires so so deeply to work in us. And I believe He will.\n\nI hope you have an amazing day, eat some good cake, and frolic in the rain :))\n\nI love you Joyce!!! And HAPPY BIRTHDAY!!!!! I'm so excited to see what God has in store for you in this next year!",
    from: "Sarah pt.3"
  },
  {
    text: "Happy birthday to the kindest and sweetest girl!! Have the most amazing year ever ❤️ Praying that you’ll always have faith that will move mountains whenever life may get uncertain - God definitely has so much in store for you in this next chapter!!\n\nMiss you tons but I’ll see you very soon :)",
    from: "Ivana"
  },
  {
    text: "Happy Birthday Joyce! Wishing you many more crazy, fun, and maybe slightly dangerous adventure in the future<3",
    from: "Julia & Jayden"
  },
  {
    text: "Happy Birthday Joyce! It has been a wholesome time with you and at Carey where you kindly lead us. May God bless you, lead you, and comfort you on every step you take!",
    from: "Joanna 🥰"
  },
  {
    text: "Joyce! You’re such a blessing to everyone around you and I love how genuine and honest you are all the time. I hope you have the best time being 20!!",
    from: "Thomas"
  },
  {
    text: "I am so, so thankful for you :) you are such a dear, sweet friend to me and to so many others... you're someone whose a compassionate heart and gentle wisdom I love and admire very much. I love your sense of humour, your dedication to growing in your faith, and how eager you are to learn and try new things. And I can't tell you how much of an encouragement you've been to me this school year alone, in your counsel and comfort, and by example (in the way you live and think and serve God).",
    from: "Jasyln pt.1"
  },
  {
    text: "You are so very loved, not for what you do, but for who you are, Joycie!! May you find rest in God's unshakeable peace every day, and in the knowledge that you are His beloved daughter.\n\nKnowing you has made me a kinder and braver person, and simply being in the same room with you is a huge source of joy and delight for me. I hope you have a wonderful twentieth year, beloved!! I am praying for you and love you so much! God bless you!!"
    , from: "Jaslyn pt.2"
  },
  {
    text: "Happy birthday! Thank you for the kindness and laughter that you bring to Carey. You inspire me with your heart for God and desire to follow His will. I hope that you had the best day!",
    from: "Caris"
  },
  {
    text: "Happy birthday Joyce. Love you very much! I'm so thankful that you are my next door neighbour. You bring so much joy to my life!",
    from: "Jaima"
  },
  {
    text: 'Happy birthday joyce!! I hope you had a grea year ad Im so thankful to have met you this year.',
    from: "Amalie"
  }, {
    text: "Happy birthday joyce!!! Super blessed to have you around at Carey! May God continue to bless you in your studies and continue to fill you with wisdom and joy!",
    from: "Josh W.",
  },
  {
    text: "Happy birthday Joyce!!! Hope you have an awesome day.",
    from: "Ethan"
  }, {
    text: "Happy birthday Joyce!! Have a really really great day!!!!!!!!!!",
    from: "Connor"
  },
  {
    text: "Happy birthday Joyce!! Hope you have an amazing good day.",
    from: "Xio"
  }, {
    text: "hbd u the goat",
    from: "Ryan"
  },
  {
    text: "Happy birthday Joyce. You've been super welcoming adn super sweet. You have a very kind energy and I hope that God continues to work through you and show you that same kindness back.",
    from: "Abbie"
  }
]

const VERSES = [
  "May the Lord bless you and protect you; may the Lord make his face shine on you and be gracious to you; may the Lord look with favor on you and give you peace.\nNumbers 6:24-26 💕",
  "\"May the Lord make his face shine on you and be gracious to you;\"\nNumbers 6:25",
  "[Zoe's] favourite verse when I’m feeling discouraged: Romans 5:3"
]
const COLORS = ['#009DB10D', '#0099000A', '#CC33000A', '#9D8A000D', '#AA550009', '#00B18A0D',]

//

// const photoPaths = ['joyce-zoe.png']
export default function Home() {
  const { data } = useSWR('/api/photos', fetcher)
  const photoPaths = data?.imageFilenames || []



  const photos = photoPaths?.map((photo, i) => {
    return <div key={photo} style={{
      minWidth: "0", position: "relative",
      minHeight: "0",
    }}> <Image
        fill
        src={`/photos/${photo}`}
        alt="Too lazy to do alts"
        style={{
          objectFit: 'contain',
        }}
      /></div>
  })

  const split = Math.floor(photos.length / 2)
  const photos1 = photos.slice(0, split)
  const photos2 = photos.slice(split)

  const messages = MESSAGES.map((message, i) => {
    return <CardFlip color={COLORS[i % (COLORS.length)]} key={message.text} front={message.text} back={message.from} />
  })

  const verses = VERSES.map((message, i) => {
    return <GridCellText key={message}>{message}</GridCellText>
  })

  const braided = braidArrays(photos1, messages, photos2, verses)
  const [isExploding, setIsExploding] = useState(true);
  const confettiProps = {
    force: 0.6,
    duration: 2500,
    particleCount: 80,
    width: 1000,
    onComplete: () => setIsExploding(false),
  }
  return (
    <>
      <Page>
        <Header>
          {isExploding && <ConfettiExplosion {...confettiProps} />}
          <InnerHeader onClick={() => setIsExploding(true)} >
            <h2>Happy Birthday</h2>
            <h1>Joyce 💕</h1>
            <sub>click on a card to see who it's from, or click this to see confetti</sub>
          </InnerHeader>
          {isExploding && <ConfettiExplosion {...confettiProps} />}
        </Header>
        <Grid>
          {
            braided
          }
        </Grid>
        <Footer>
          <Link target="_blank" href={'https://github.com/yangchristina/joyce-ko'}>
            <GitHubLogoIcon /> Contribute here
          </Link>
        </Footer>
      </Page>
    </>
  )
}
