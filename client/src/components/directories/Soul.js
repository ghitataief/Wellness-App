import styled from "styled-components";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import quotation from "../images/quotation.png";
import meditation from "../images/meditation.png"

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
        setAffirmation(selectedAffirmations);
      })
      .catch((error) => {
        setErrorUser("error:", error);
      })
      .finally(() => {});
  }, []);

  return (
    <Wrap>
      <Helmet bodyAttributes={{ style: "background-color :#CEE8F7 " }} />
      <img src={quotation} alt="quote mark"/>
      <Title>Soul Practice <img src={meditation} alt="meditation body" className="meditation"/></Title>
    
      <QuoteGenerator>
        "{quote}" - {author}
      </QuoteGenerator>

      <Wrapper>
        <>
          <ToGetStarted>
            <ul>
              To get started :
              <li>
                Start with 3 to 5 minutes at least twice a day. Try saying
                affirmations upon waking up and getting into bed
              </li>
              <li>
                Make your routine consistent. Try not to skip any days. If you
                meditate, affirmations can be a great addition to your daily
                practice.
              </li>
              <li>
                Be patient. It may take some time before you notice any changes,
                so stick with your practice!
              </li>
            </ul>
          </ToGetStarted>
          <MainContent>
            <Description>
              Feed your soul with positives affirmations.
              <br />
              <SubDescription>
                They say you are what you think. Think you’re destined to fail
                and you will. But believe you’re in charge of your own success
                and you’ll achieve your dreams.
                <hr />
              </SubDescription>
              <img src={quotation} />
              <AffirmationGenerator>
                {affirmation.map((item) => {
                  return (
                    <Affirmation>
                      {item}
                      <br />
                    </Affirmation>
                  );
                })}
              </AffirmationGenerator>
            </Description>
            
          </MainContent>
        </>
      </Wrapper>
    </Wrap>
  );
};

export default Soul;

const Wrap = styled.div`
  img {
    width: 400px;
    position: absolute;
    z-index: 2;
    margin-top: 200px;
  }

  .meditation{
    width: 700px;
    position: absolute;
    z-index: 2;
    margin-left: 900px;
    margin-top: 5px;
  }
`;
const Wrapper = styled.div`
  margin: 100px;
  display: flex;


  img {
    width: 300px;
    position: absolute;
    z-index: 2;
    margin-top: 290px;
  }
`;
const MainContent = styled.div``;
const Title = styled.div`
  padding: 160px;
  font-weight: bold;
  font-size: 100px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  color: white;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const SubDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: italic;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  hr {
    height: 1px;
  }
`;

const Affirmation = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-style: italic;
  margin: 30px;
  background-color: white;
  padding: 40px;
  border-radius: 3px;
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
  padding: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  width: fit-content;
`;

const QuoteGenerator = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-size: 30px;
  margin: 50px;
  display: flex;
  align-self: center;
  background-color: #404040;
  color: white;
  width: 50vw;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

const ToGetStarted = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: italic;
  background-color: whitesmoke;
  padding: 40px;
  border-radius: 5px;
  width: max-content;
  height: max-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  ul {
    font-weight: bold;
  }
  li {
    margin: 25px;
  }
`;
