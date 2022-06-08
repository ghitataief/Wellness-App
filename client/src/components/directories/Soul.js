import styled from "styled-components";
import { useEffect, useState } from "react";

const Soul = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [affirmations, setAffirmations] = useState([]);
  const arrayOfAffirmations = [];

  //select one random affirmation
  const [affirmation, setAffirmation] = useState([]);

  //Fetch and catching errors
  const { errorUser, setErrorUser } = useState();

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[Math.floor(Math.random() * quote.length)].q);
        setAuthor(data[Math.floor(Math.random() * quote.length)].a);
      });
  }, []);

  useEffect(() => {
    fetch("/api/get-affirmations")
      .then((res) => res.json())
      .then((data) => {
        data.data.map((affirmation) => {
          arrayOfAffirmations.push(affirmation.affirmation);
        });
        setAffirmations(arrayOfAffirmations);
      })
      .catch((error) => {
        setErrorUser("error:", error);
      })
      .finally(() => {
        setAffirmation(
          affirmations[Math.floor(Math.random() * affirmations.length)]
        );
      });
  }, []);


  return (
    <Wrapper>
      <Title>Soul Practice</Title>
      <QuoteGenerator>
        "{quote}" - {author}
      </QuoteGenerator>
      <Description>
        Feed your soul with positives affirmations.
        <br />
        <SubDescription>
          Daily practice of affirmations help you take charge of your life and
          turn dreams into reality
        </SubDescription>
        <ul>
          To get started :<li>Be vulnerable</li>
          <li>Be personal</li>
          <li>Be consistant</li>
        </ul>
        <AffirmationGenerator>{affirmation}</AffirmationGenerator>
      </Description>
    </Wrapper>
  );
};

export default Soul;
const Wrapper = styled.div`
  margin: 100px;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
`;
const SubDescription = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: italic;
`;
const Description = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin: 50px 350px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  display: flex;
  flex-direction: column;
  ul {
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
  }
  li {
    margin-left: 45px;
    margin-top: 10px;
  }
`;
const AffirmationGenerator = styled.div`
  margin-top: 50px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  display: flex;
  justify-content: center;
  background-color: #fee4cc;
  border-radius: 20px;
  width: fit-content;
`;

const QuoteGenerator = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-size: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
