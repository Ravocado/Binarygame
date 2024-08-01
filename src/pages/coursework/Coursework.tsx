import './Coursework.css';
import '../../styles/global.css';
import Togglecard from '../../components/togglecard/Togglecard.tsx';
import Link from '../../components/link/Link.tsx';

const CSCourses = [
  {
    name: 'CS 3100 Algorithms',
    extraContent: (
      <Link
        name="CLRS"
        href="https://en.wikipedia.org/wiki/Introduction_to_Algorithms"
      />
    ),
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
    extraContent: (
      <Link
        name="Hyperplane Separation Theorem"
        href="https://en.wikipedia.org/wiki/Hyperplane_separation_theorem"
      />
    ),
  },
  {
    name: 'MATH 3310 Basic Real Analysis',
  },
  {
    name: 'MATH 4452 Algebraic Coding Theory',
    extraContent: <div>They brought back polynomials 😥</div>,
  },
];

const Coursework = () => {
  return (
    <div className="page-content text-body">
      <h1>Computer Science</h1>
      <ul>
        {CSCourses.map((course, index) => {
          return (
            <li key={index}>
              {
                <Togglecard
                  cardName={course.name}
                  extraContent={course.extraContent}
                />
              }
            </li>
          );
        })}
      </ul>
      <h1>Math</h1>
      <ul>
        {MathCourses.map((course, index) => {
          return (
            <li key={index}>
              {
                <Togglecard
                  cardName={course.name}
                  extraContent={course.extraContent}
                />
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Coursework;
