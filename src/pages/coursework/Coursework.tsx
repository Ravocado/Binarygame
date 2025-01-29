import './Coursework.css';
import '../../styles/global.css';

const CSCourses = [
  {
    name: 'CS 3100 Algorithms',
  },
  {
    name: 'CS 4501 Data Privacy',
  },
  {
    name: 'CS 3130 Computer Systems and Organization II',
  },
  {
    name: 'CS 3240 Advanced Software Development',
  },
  {
    name: 'CS 3710 Introduction to Cybersecurity',
  },
  {
    name: 'CS 4620 Compilers',
  },
  {
    name: 'CS 4501 Digital Signal Processing',
  },
  {
    name: 'CS 6888 Software Analysis and Applications',
  },
  {
    name: 'CS 4730 Game Development',
  },
  {
    name: 'CS 4610 Programming Languages',
  },
  {
    name: 'CS 4414 Operating Systems',
  },
];

const MathCourses = [
  {
    name: 'APMA 3100 Probability',
  },
  {
    name: 'CS 3120 Discrete Mathematics II',
  },
  {
    name: 'MATH 3354 Survey of Algebra',
  },
  {
    name: 'MATH 4110 Stochastic Processes',
  },
  {
    name: 'MATH 3250 Ordinary Differential Equations',
  },
  {
    name: 'MATH 4140 Mathematics of Derivative Securities',
  },
  {
    name: 'MATH 3310 Basic Real Analysis',
  },
  {
    name: 'MATH 4452 Algebraic Coding Theory',
  },
];

const Coursework = () => {
  return (
    <div className="page-content text-body">
      <h1>Computer Science</h1>
      <ul>
        {CSCourses.map((course, index) => {
          return <li key={index}>{course.name}</li>;
        })}
      </ul>
      <h1>Math</h1>
      <ul>
        {MathCourses.map((course, index) => {
          return <li key={index}>{course.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Coursework;
