import { useState } from "react";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Title from "../components/Titles/Title";
import Layout from "../layout/Layout";


export default function Home(): JSX.Element {
  const [rating, setRating] = useState(3)
  return (
    <Layout >
      <Title type="h1">Title</Title>
      <P size="large">dasdasdasd  </P>
      <P  > fsdfds </P>
      <P size="small" > fsdfdsf </P>
      <Rating isEdit={true} rating={rating} setRating={setRating} />
      <Button onClick={() => { }} extraClass="main_green" >Check &#10140;</Button>
    </Layout>
  )
}
