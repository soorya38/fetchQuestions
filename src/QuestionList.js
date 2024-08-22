import axios from "axios";
import { useEffect, useState } from "react";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(() => data.result.problems);
      console.log(data.result.problems);
    });
  }, []);

  return (
    <ul>
      {questions?.map((question, index) => (
        <li key={index}>{question.name} {question.rating? question.rating: 'not rated'}</li> 
      ))}
    </ul>
  );
};

const getQuestions = async () => {
  const { data } = await axios.get(
    `https://codeforces.com/api/problemset.problems`,
  );
  return data;
};

export default QuestionList;
