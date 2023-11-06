import { styled } from "@/stitches.config"
import Image from "next/image";

const Page = styled('div', {
  minHeight: "100vh",
  margin: "0",
  boxSizing: 'border-box',
  gridGap: '0',
  display: "grid",
  position: "relative",
  gridTemplateColumns: `1fr 5fr 1fr`,
  gridTemplateRows: "1.35fr 5fr",
  gridTemplateAreas: `
    ". header ."
    ". grid ."
    ". footer ."
  `,
  overflow: 'auto',
});

const Header = styled('header', {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gridArea: "header",
  flexDirection: "column",
  fontSize: "1.5rem",
})

const Grid = styled('div', {
  gridGap: '0',
  position: "relative",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
  gridAutoRows: "300px",
  gridArea: "grid",
  minWidth: "0",
  minHeight: "0",
})

const Footer = styled('footer', {
  width: '100%',
  height: '50px',
  gridArea: "footer",
})

const messages = []
const photoPaths = ['joyce-zoe.png']
export default function Home() {
  const photos = photoPaths.map((photo, i) => {
    return <div style={{
      minWidth: "0", position: "relative",
      minHeight: "0",
    }}> <Image
        fill
        src={`/photos/${photo}`}
        alt="Current Image"
        style={{
          objectFit: 'contain',
        }}
      /></div>
  })
  return (
    <>
      <Page>
        <Header>
          <h2>Happy Birthday</h2>
          <h1>Joyce Ko</h1>
        </Header>
        <Grid>
          {
            photos
          }
        </Grid>
        <Footer />
      </Page>
    </>
  )
}
