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
    fetch("/api/quotes")
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
        //shuffle the element to get a randome array
        const shuffled = arrayOfAffirmations.sort(() => 0.5 - Math.random());
        let selectedAffirmations = shuffled.slice(0, 5);
        console.log("selectedAffirmations", selectedAffirmations);
        setAffirmation(selectedAffirmations);
      })
      .catch((error) => {
        setErrorUser("error:", error);
      })
      .finally(() => {
        // setAffirmation(
        //   affirmations[Math.floor(Math.random() * affirmations.length)]
        //);
      });
  }, []);

  return (
    <Wrapper>
      <ToGetStarted>
        <ul>
          To get started :
          <li>
            Start with 3 to 5 minutes at least twice a day. Try saying
            affirmations upon waking up and getting into bed, for example.
          </li>
          <li>
            Make your routine consistent. Try not to skip any days. If you
            meditate, affirmations can be a great addition to your daily
            practice.
          </li>
          <li>
            Be patient. It may take some time before you notice any changes, so
            stick with your practice!
          </li>
        </ul>
      </ToGetStarted>
      <MainContent>
        <Title>Soul Practice</Title>
        <QuoteGenerator>
          "{quote}" - {author}
        </QuoteGenerator>
        <Description>
          Feed your soul with positives affirmations.
          <br />
          <SubDescription>
            They say you are what you think. Think you’re destined to fail and
            you will. But believe you’re in charge of your own success and
            you’ll achieve your dreams.
            <hr/>
          </SubDescription>
          <AffirmationGenerator>
            {affirmation.map((item) => {
              return (
                <Affirmation>
                  - {item}
                  <br />
                </Affirmation>
              );
            })}
          </AffirmationGenerator>
        </Description>
      </MainContent>
    </Wrapper>
  );
};

export default Soul;
const Wrapper = styled.div`
  margin: 100px;
  display: flex;
`;
const MainContent = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
`;
const SubDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: italic;

hr{
    height: 1px;
}
`;

const Affirmation = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 50px;
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
  flex-direction: column;
  background-color: #fee4cc;
  border-radius: 20px;
  padding: 80px;
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

const ToGetStarted = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: italic;
  background-color: whitesmoke;
  width: max-content;
  height: max-content;
  ul {
    font-weight: bold;
  }
`;
